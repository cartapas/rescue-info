import { registerSW } from 'virtual:pwa-register';

registerSW({
    immediate: true,
    onNeedRefresh() {},
    onOfflineReady() {
        console.log('App lista para funcionar sin conexión.');
    },
});