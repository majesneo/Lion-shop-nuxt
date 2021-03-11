<template>
  <div>
    <b-overlay :show="!editor" no-wrap />
    <no-ssr>
      <form action="" @submit.prevent="submitPost">
        <div class="editor mt-2">
          <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
            <div class="menubar">
              <button
                class="menubar__button"
                @click.prevent="showImageInfo()"
              >
                <b-icon icon="card-image" />
              </button>
              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.bold() }"
                @click.prevent="commands.bold"
              >
                <b-icon icon="type-bold" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.italic() }"
                @click.prevent="commands.italic"
              >
                <b-icon icon="type-italic" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.strike() }"
                @click.prevent="commands.strike"
              >
                <b-icon icon="type-strikethrough" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.underline() }"
                @click.prevent="commands.underline"
              >
                <b-icon icon="type-underline" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.code() }"
                @click.prevent="commands.code"
              >
                <b-icon icon="code" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.paragraph() }"
                @click.prevent="commands.paragraph"
              >
                <b-icon icon="paragraph" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                @click.prevent="commands.heading({ level: 1 })"
              >
                H1
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                @click.prevent="commands.heading({ level: 2 })"
              >
                H2
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                @click.prevent="commands.heading({ level: 3 })"
              >
                H3
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.bullet_list() }"
                @click.prevent="commands.bullet_list"
              >
                <b-icon icon="list-ul" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.ordered_list() }"
                @click.prevent="commands.ordered_list"
              >
                <b-icon icon="list-ol" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.blockquote() }"
                @click.prevent="commands.blockquote"
              >
                <b-icon icon="blockquote-left" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.code_block() }"
                @click.prevent="commands.code_block"
              >
                <b-icon icon="code" />
              </button>

              <button
                class="menubar__button"
                @click.prevent="commands.horizontal_rule"
              >
                <b-icon icon="hr" />
              </button>

              <button
                class="menubar__button"
                @click.prevent="commands.undo"
              >
                <b-icon icon="skip-backward" />
              </button>

              <button
                class="menubar__button"
                @click.prevent="commands.redo"
              >
                <b-icon icon="skip-forward" />
              </button>
            </div>
          </editor-menu-bar>

          <editor-content class="editor__content" :editor="editor" />

          <div class="text-center">
            <b-overlay
              :show="busy"
              rounded
              opacity="0.6"
              spinner-small
              spinner-variant="primary"
              class="d-inline-block"
            >
              <b-button
                variant="primary"
                type="submit"
                class="btn btn-outline-primary-2 mt-2 mb-3"
                @click.prevent="submitPost"
              >
                <span>{{ method }}</span>
                <i class="icon-long-arrow-right" />
              </b-button>
            </b-overlay>
          </div>
        </div>
      </form>
    </no-ssr>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Image,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'
import mixinToast from '@/mixins/mixinToast'

export default {
  name: 'EditorTipTap',
  components: {
    EditorContent,
    EditorMenuBar
  },
  mixins: [mixinToast],

  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    method: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      editor: null,
      contentPost: '',
      busy: false
    }
  },
  computed: {
    postDescription () {
      return this.description
    }
  },
  mounted () {
    this.editor = new Editor({
      extensions: [
        new Image(),
        new Blockquote(),
        new BulletList(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3] }),
        new HorizontalRule(),
        new ListItem(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new Link(),
        new Bold(),
        new Code(),
        new Italic(),
        new Strike(),
        new Underline(),
        new History()
      ],
      content: `${this.postDescription}`,
      onUpdate: ({ getHTML }) => {
        this.changed = true
        const html = getHTML()
        this.contentPost = html
      }
    })
  },
  beforeDestroy () {
    this.editor.destroy()
  },
  methods: {
    showImageInfo () {
      const message = 'drop image in text'
      this.makeToast('b-toaster-top-center', 'info', message)
    },
    checkValid () {
      return this.contentPost.length > 7
    },
    submitPost () {
      if (this.checkValid()) {
        this.$emit('checkDescrValid', this.contentPost)
      } else {
        this.$emit('checkDescrValid', false)
      }
    }
  }
}
</script>

<style scoped>
.editor p.is-empty:first-child::before {
  content: attr(data-empty-text);
  float: left;
  color: #aaa;
  pointer-events: none;
  height: 0;
  font-style: italic;
}
.editor__content{
  border: 1px solid #ebebeb;
}
:focus {
  outline: #c96 solid 1px;
}
.editor {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.editor__content {
  background: white;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}
.editor__content > div[contenteditable="true"] {
  min-height: 100%;
  margin-bottom: 80px;
}
.editor__content > div[contenteditable="true"]:focus {
  /* outline: 2px solid #204468; */
  outline: none;
}
.editor__content * {
  caret-color: currentColor;
}
.editor__content pre {
  padding: 0.7rem 1rem;
  border-radius: 5px;
  background: #000;
  color: #fff;
  font-size: 0.8rem;
  overflow-x: auto;
}
.editor__content pre code {
  display: block;
}
.editor__content p code {
  font-family: "Roboto Mono", monospace;
  padding: 0.2rem 0.4rem;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.1);
}
.editor__content ul, .editor__content ol {
  padding-left: 1rem;
}
.editor__content li > p, .editor__content li > ol, .editor__content li > ul {
  margin: 0;
}
.editor__content a {
  color: inherit;
}
.editor__content blockquote {
  border-left: 3px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.8);
  padding-left: 0.8rem;
  font-style: italic;
}
.editor__content blockquote p {
  margin: 0;
}
.editor__content img {
  max-width: 100%;
  border-radius: 3px;
}
.editor__content table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  margin: 0;
  overflow: hidden;
}
.editor__content table td, .editor__content table th {
  min-width: 1em;
  border: 2px solid #ddd;
  padding: 3px 5px;
  vertical-align: top;
  box-sizing: border-box;
  position: relative;
}
.editor__content table td > *, .editor__content table th > * {
  margin-bottom: 0;
}
.editor__content table th {
  font-weight: bold;
  text-align: left;
}
.editor__content table .selectedCell:after {
  z-index: 2;
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(200, 200, 255, 0.4);
  pointer-events: none;
}
.editor__content table .column-resize-handle {
  position: absolute;
  right: -2px;
  top: 0;
  bottom: 0;
  width: 4px;
  z-index: 20;
  background-color: #adf;
  pointer-events: none;
}
.editor__content .tableWrapper {
  margin: 1em 0;
  overflow-x: auto;
}
.editor__content .resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}

.menubar {
  display: flex;
  position: sticky;
  top: 0;
  background: #ffffff;
  z-index: 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  margin: 0;
  height: 40px;
  transition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;
}
.menubar.is-hidden {
  visibility: hidden;
  opacity: 0;
}
.menubar.is-focused {
  visibility: visible;
  opacity: 1;
  transition: visibility 0.2s, opacity 0.2s;
}
.menubar__group {
  border-right: 1px solid #ddd;
  margin: 4px 0;
  display: flex;
}
.menubar__button {
  font-weight: bold;
  display: inline-flex;
  background: transparent;
  border: 0;
  color: #000;
  padding: 0.2rem 0.5rem;
  margin: 0 0.2rem;
  border-radius: 3px;
  cursor: pointer;
}
.menubar__button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.menubar__button.is-active {
  background-color: rgba(0, 0, 0, 0.1);
}
span.menubar__button {
  font-size: 13.3333px;
}
.edit{
  width: 80%;
}

</style>
