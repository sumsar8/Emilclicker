((window) => {
     console.log('fulis v1');

     const CHECKMARK_URL = '../images/checkmark.png';

     const upgrade_btns = document.querySelectorAll('header button');
     const score = document.querySelector('main section div.score')
     const click_btn = document.querySelector('main section button');
     const cps_btn = document.querySelector('main aside button');
     const reset_btn = document.querySelector('footer button');

     for (let el of [
          click_btn,
          cps_btn,
          ...upgrade_btns
     ]) {
          el.ondragstart = (e) => (e.preventDefault(), false);
     }

     const LOCALSTORAGE_KEY = 'fulis';

     const getState = () => localStorage.getItem(LOCALSTORAGE_KEY) ? JSON.parse(atob(localStorage.getItem(LOCALSTORAGE_KEY))) : {
          score: 0,
          increase: 1,
          upgrades: [],
          cps: 0
     }

     const setState = (state) => localStorage.setItem(LOCALSTORAGE_KEY, btoa(JSON.stringify(state)));

     const state = {
          _: getState(),
          score: {
               set: (value) => {
                    if(value != state.score.get()) {
                         state._.score = score.innerHTML = value;
                    }

                    setState(state._);
               },
               get: () => state._.score
          },
          increase: {
               set: (value) => {
                    state._.increase = value;
                    setState(state._);
               },
               get: () => state._.increase
          },
          upgrades: {
               set: (value) => {
                    state._.upgrades = value;
                    setState(state._);
               },
               get: () => state._.upgrades
          },
          cps: {
               set: (value) => {
                    state._.cps = value;
                    setState(state._);
               },
               get: () => state._.cps
          }
     }

     setInterval(() => {
          state.score.set(state.score.get() + state.cps.get());
     }, 1000)

     score.innerHTML = state.score.get();

     for(let el of upgrade_btns) {
          let highest = {cost: 0, el: null};
          
          const cost = parseInt(el.dataset.cost);

          if(state.upgrades.get().includes(el.dataset.cost)) {
               el.querySelector('img').src = CHECKMARK_URL;
               if(cost > highest.cost) highest = {cost, el};
          }

          if(highest.el) {
               click_btn.querySelector('img').src = highest.el.dataset.img;
          }

          el.onclick = () => {
               const increase = parseInt(el.dataset.increase);

               if(state.score.get() < cost) return;
               if(state.upgrades.get().includes(cost)) return;
               
               el.querySelector('img').src = CHECKMARK_URL;

               state.upgrades.set([
                    ...state.upgrades.get(),
                    cost
               ])

               click_btn.querySelector('img').src = el.dataset.img;
               
               state.score.set(state.score.get() - cost);
               state.increase.set(state.increase.get() + increase);
          }
     }

     click_btn.onclick = () => {
          state.score.set(state.score.get() + state.increase.get());
     }

     cps_btn.onclick = () => {
          const cost = 100;

          if (state.score.get() < cost) return;

          state.score.set(state.score.get() - cost);
          state.cps.set(state.cps.get() + 1);
     }

     reset_btn.onclick = () => {
          localStorage.removeItem(LOCALSTORAGE_KEY);
          location.reload();
     }
})(window)