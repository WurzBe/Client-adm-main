// Service Worker Básico para permitir a instalação do PWA
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
    // Permite que o app funcione normalmente puxando os dados da rede
    e.respondWith(fetch(e.request).catch(() => console.log('Buscando da rede falhou')));
});