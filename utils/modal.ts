import Vue, { VueConstructor } from 'vue';
import Modal from 'ui/Modal/Modal.vue';
import AlertModal from 'ui/Modal/AlertModal.vue';

const openedModals: Vue[] = [];

const modal = {
  async show<T>(component: VueConstructor): Promise<T | boolean> {
    while (openedModals.length !== 0) await new Promise(resolve => window.setTimeout(resolve, 500));

    return new Promise(resolve => {
      const containerId = createContainer();
      document.body.style.overflow = 'hidden';

      const $auth = window.$nuxt.$auth;

      const vue = new Vue({
        store: window.$nuxt.$store,
        provide: { $auth },

        methods: {
          change(e: T) {
            resolve(e);
          },

          close() {
            resolve(false);
            this.destroySelf();
            if (!document.body.contains(this.$el)) return;

            window.setTimeout(() => {
              document.body.removeChild(this.$el);
              const modalIndex = openedModals.findIndex(x => x === this);
              openedModals.splice(modalIndex, 1);
            }, 500);
          },

          destroySelf() {
            this.$nextTick().then(() => {
              this.$destroy();
              document.body.style.overflow = '';
            });
          },
        },

        render(h) {
          return h(Modal, { on: { change: this.change, close: this.close } }, [h(component)]);
        },
      }).$mount(`#${containerId}`);

      openedModals.push(vue);
    });
  },

  alert(/* пропы и т.д. */) {
    this.show(AlertModal /* пропы и т.д. */);
  },
};

function createContainer() {
  const divElement = document.createElement('div');
  divElement.id = `v${Math.random().toString(36).substring(2)}`;
  document.body.appendChild(divElement);

  return divElement.id;
}

export default modal;
