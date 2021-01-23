<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="modalCloseHandler">
      <div
        class="modal"
        :style="{ width: modalWidth + '%' }"
        ref="modal"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <button type="button" class="btn-close" @click="close">x</button>

        <section class="modal-body">
          <slot name="body">
            <slot></slot>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["modalWidth"],
  methods: {
    close() {
      this.$emit("close");
    },
    modalCloseHandler(e) {
      if (this.$refs.modal.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      this.close();
    },
  },
};
</script>

<style>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.modal-backdrop {
  position: fixed;
  display: block;
  overflow: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  cursor: pointer;
}

.modal {
  margin: 2% auto;
  background-color: #ffffff;
  border-radius: 0.25rem;
  width: 50%;
  height: auto;
  padding: 0;
  position: relative;
  cursor: auto;
  display: block;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 2px;
  right: 4px;
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #e67e22;
  background: transparent;
  z-index: 999;
  outline: none !important;
}
.btn-close:focuus {
  outline: none !important;
}
</style>