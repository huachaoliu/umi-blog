import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  ...((require('/home/dx/lhc/huachaoliu.github.io/src/dva.js').config || (() => ({})))()),
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('/home/dx/lhc/huachaoliu.github.io/src/models/global.js').default) });
app.model({ namespace: 'index', ...(require('/home/dx/lhc/huachaoliu.github.io/src/pages/home/models/index.js').default) });
