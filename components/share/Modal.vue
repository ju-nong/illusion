<template>
    <div
        class="modal-container p-4 fixed z-[100] bg-white rounded shadow-lg cursor-pointer flex flex-col z-[20]"
    >
        <p class="text-2xl text-bold font-black pb-2">Illusion Settings</p>
        <label for="icon">
            Icon
            <input
                type="text"
                :value="props.config.icon"
                id="icon"
                @input="handleUpdate"
            />
        </label>
        <label for="diameter">
            Diameter
            <input
                type="number"
                min="0"
                :value="props.config.diameter"
                id="diameter"
                @input="handleUpdate"
            />
        </label>
        <label for="count">
            Count
            <input
                type="number"
                min="0"
                :value="props.config.count"
                id="count"
                @input="handleUpdate"
            />
        </label>
        <label for="opacity">
            Opacity
            <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                :value="props.config.opacity"
                id="opacity"
                @input="handleUpdate"
            />
        </label>
        <button
            class="close-btn absolute top-0 right-0 px-2 py-[0.2rem] text-white rounded shadow-md"
            @click="emit('close')"
        >
            X
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    config: Object,
});

const cloneConfig = reactive({ ...props.config });

const emit = defineEmits(["update", "close"]);

function handleUpdate(event) {
    const { id, value } = event.target;

    emit("update", { key: id, value });
}
</script>

<style lang="scss">
.modal-container {
    label {
        padding: 5px 10px;
        cursor: pointer;
        input {
            width: 7rem;
            margin-left: 1rem;
            float: right;
            border: 1px solid #000;
        }
    }

    .close-btn {
        background: #44bd87;
        transform: translate(30%, -30%);
    }
}
</style>
