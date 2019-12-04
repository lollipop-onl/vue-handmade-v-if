import Vue from 'vue';

Vue.directive('custom-if', {
   inserted(el, binding, vnode) {
       const mql = window.matchMedia('(min-width: 500px)');
       const comment = document.createComment('This element is only visible if min-width: 500px');
       const listener = () => {
           if (!document.documentElement.contains(el)) {
               mql.removeListener(listener);

               return;
           }

           if (mql.matches) {
               el.parentNode.replaceChild(vnode.elm, el);
               el = vnode.elm;
           } else {
               el.parentNode.replaceChild(comment, el);
               el = comment;
           }
       }

       mql.addListener(listener);
       listener();
   },
});
