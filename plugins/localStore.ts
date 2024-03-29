export default defineNuxtPlugin(() => {
  return {
    provide: {
      localStore: {
        getItem(item: any) {
          if (process.client) {
            return localStorage.getItem(item);
          } else {
            return undefined;
          }
        },
        setItem(item: any, value: any) {
          if (process.client) {
            return localStorage.setItem(item, value);
          }
        },
      },
    },
  };
});
