<template>
  <div>
    <b-breadcrumb class="breadcrumb-nav mt-2 mb-1">
      <b-breadcrumb-item class="breadcrumb-item" to="/admin/analytics">
        Admin
      </b-breadcrumb-item>
      <b-breadcrumb-item class="breadcrumb-item" to="/admin/list/posts">
        Posts
      </b-breadcrumb-item>
      <b-breadcrumb-item class="breadcrumb-item" active>
        {{ post.title }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <h5 class="mt-2">
      Edit post
    </h5>
    <!--    <b-form class="size-form mt-2" @submit.prevent="onSubmit">
      <p>Title</p>

      <b-form-input
        v-model="$v.title.$model"
        style="margin: 0"
        placeholder="Enter post title"
      />
      <span
        v-if="$v.title.$dirty &&
          !$v.title.required"
        class="text-danger"
      >Title is required
      </span>

      <b-container fluid class="p-4 bg-dark mt-1">
        <p class="text-white mb-1">
          Choose a image or drop it here...
        </p>
        <b-row>
          <b-col>
            <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1" />
          </b-col>
          <b-col>
            <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1" />
          </b-col>
        </b-row>
        <b-form-file class="mt-2" multiple>
          <template slot="file-name" slot-scope="{ names }">
            <b-badge variant="dark">
              {{ names[0] }}
            </b-badge>
            <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
              + {{ names.length - 1 }} More files
            </b-badge>
          </template>
        </b-form-file>
      </b-container>

      <p class="mt-1">
        Description
      </p>
      <b-form-textarea
        id="textarea"
        v-model="$v.description.$model"
        style="margin: 0"
        placeholder="Enter description..."
        rows="3"
        max-rows="6"
      />

      <span
        v-if="$v.description.$dirty && !$v.description.required"
        class="text-danger"
      >Description is required</span>

      <div class="data-posts">
        <div>
          <b-icon icon="eye" />
          <span>
            {{ post.views }}
          </span>
        </div>
        <div>
          <b-icon icon="clock-history" />
          <span>
            {{ post.date }}
          </span>
        </div>
      </div>
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
          :disabled="$v.$anyError"
          type="submit"
          class="btn btn-outline-primary-2 mt-2"
        >
          <span>Refresh</span>
          <i class="icon-long-arrow-right" />
        </b-button>
      </b-overlay>
    </b-form>-->
    <div class="editor">
      <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
        <div class="menubar">
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <icon name="bold" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <icon name="italic" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <icon name="strike" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <icon name="underline" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
          >
            <icon name="code" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.paragraph() }"
            @click="commands.paragraph"
          >
            <icon name="paragraph" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            H1
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            H2
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            H3
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <icon name="ul" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <icon name="ol" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
          >
            <icon name="quote" />
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <icon name="code" />
          </button>

          <button
            class="menubar__button"
            @click="commands.horizontal_rule"
          >
            <icon name="hr" />
          </button>

          <button
            class="menubar__button"
            @click="commands.undo"
          >
            <icon name="undo" />
          </button>

          <button
            class="menubar__button"
            @click="commands.redo"
          >
            <icon name="redo" />
          </button>
        </div>
      </editor-menu-bar>

      <editor-content class="editor__content" :editor="editor" />
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import mixinToast from '@/mixins/mixinToast'
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
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'

export default {
  name: 'Id',
  layout: 'admin',
  middleware: 'auth-admin',
  components: {
    EditorContent,
    EditorMenuBar
  },
  mixins: [mixinToast],
  async asyncData ({ store, params }) {
    const post = await store.dispatch('posts/getPostById', params.id)
    return { post }
  },
  data () {
    return {
      title: '',
      description: '',
      busy: false,
      editor: new Editor({
        extensions: [
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
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
        `
      })
    }
  },
  mounted () {
    this.title = this.post.title
    this.description = this.post.description
  },
  beforeDestroy () {
    this.editor.destroy()
  },
  methods: {
    async onSubmit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
      } else {
        this.busy = true
        const formData = {
          title: this.title,
          description: this.description
        }
        try {
          await this.$store.dispatch('posts/updatePost', formData)
          const message = 'Post updated'
          this.makeToast('b-toaster-top-center', 'success', message)
        } catch (e) {

        } finally {
          this.busy = false
        }
      }
    }
  },
  validations: {
    title: {
      required
    },
    description: {
      required
    }
  }
}
</script>

<style scoped>
.size-form {
  width: 50%;
}

.data-posts {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.menubar{
  margin-bottom: 1rem;
  -webkit-transition: visibility .2s .4s,opacity .2s .4s;
  transition: visibility .2s .4s,opacity .2s .4s;
}
.menubar__button {
  font-weight: 700;
  display: -webkit-inline-box;
  display: inline-flex;
  background: transparent;
  border: 0;
  color: #000;
  padding: .2rem .5rem;
  margin-right: .2rem;
  border-radius: 3px;
  cursor: pointer;
}
.menubar__button.is-active {
  background-color: rgba(0,0,0,.1);
}
</style>
