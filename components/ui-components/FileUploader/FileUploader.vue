<template>
  <div>
    <input ref="inputFile" type="file" accept="image/*" style="display: none" @input="onInput($event)" />

    <InputGroup v-model="fileName" :class="$style.input" placeholder="Search collection by name">
      <template #right>
        <Button :class="$style.chooseFileButton" size="sm" variant="primary" @click="chooseFile"> Choose file </Button>
      </template>
    </InputGroup>

    <div :class="$style.message">You can upload jpg, gif, png</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import InputGroup from 'ui/Input/InputGroup.vue';
import Button from 'ui/Button/Button.vue';

type InputEvent = Event & { target: HTMLInputElement };

export default Vue.extend({
  name: 'TillesFileUploader',
  components: { InputGroup, Button },

  props: {
    value: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      fileName: null as string | null,
    };
  },

  methods: {
    onInput(e: InputEvent) {
      const file = this.getFile(e);
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.fileName = file.name;
        this.$emit('input', e.target?.result);
      };
      reader.readAsBinaryString(file);
    },

    chooseFile() {
      const inputFile = this.$refs.inputFile as HTMLInputElement;
      inputFile.click();
    },

    getFile(e: InputEvent) {
      if (!(e.target?.files instanceof FileList)) return null;
      return e.target.files.item(0);
    },
  },
});
</script>

<style lang="scss" module>
.input {
  padding: 12px 12px 12px 24px;
  color: $input-text-color;
  background-color: $input-bg;
  border-radius: $input-radius;
}

.chooseFileButton {
  width: 150px;
  background-color: $bg-medium !important;
  border-radius: 8px;
}

.message {
  @include fontInterRegular(14);
  color: $text-color-secondary;
  margin-top: $gap-xxs;
}
</style>
