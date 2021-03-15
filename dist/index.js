import { defineComponent, openBlock, createBlock, createVNode, toDisplayString, withDirectives, vShow, createCommentVNode } from 'vue';

var script = defineComponent({
    name: "DemoComponent",
    data: function () {
        return {
            title: "Demo Component",
            isOpen: true,
        };
    },
    methods: {
        toggle: function () {
            this.isOpen = !this.isOpen;
        }
    }
});

const _hoisted_1 = { key: 0 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", null, [
    createVNode("h1", null, toDisplayString(_ctx.title), 1 /* TEXT */),
    createVNode("button", {
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.toggle && _ctx.toggle(...args)))
    }, "Click me to show/hide"),
    withDirectives(createVNode("div", null, "Lorem ipsum using v-show", 512 /* NEED_PATCH */), [
      [vShow, _ctx.isOpen]
    ]),
    (_ctx.isOpen)
      ? (openBlock(), createBlock("div", _hoisted_1, "Lorem ipsum using v-if"))
      : createCommentVNode("v-if", true)
  ]))
}

script.render = render;
script.__file = "src/components/Demo.vue";

export { script as Demo };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL0RlbW8udnVlIiwiLi4vc3JjL2NvbXBvbmVudHMvRGVtby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDkyNjAwOTMmbGFuZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGgxPnt7IHRpdGxlIH19PC9oMT5cbiAgICA8YnV0dG9uIEBjbGljaz1cInRvZ2dsZVwiPkNsaWNrIG1lIHRvIHNob3cvaGlkZTwvYnV0dG9uPlxuICAgIDxkaXYgdi1zaG93PVwiaXNPcGVuXCI+TG9yZW0gaXBzdW0gdXNpbmcgdi1zaG93PC9kaXY+XG4gICAgPGRpdiB2LWlmPVwiaXNPcGVuXCI+TG9yZW0gaXBzdW0gdXNpbmcgdi1pZjwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5cbmludGVyZmFjZSBDb21wb25lbnREYXRhIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaXNPcGVuOiBib29sZWFuLFxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiBcIkRlbW9Db21wb25lbnRcIixcblxuICBkYXRhKCk6IENvbXBvbmVudERhdGEge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogXCJEZW1vIENvbXBvbmVudFwiLFxuICAgICAgaXNPcGVuOiB0cnVlLFxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgIH1cbiAgfVxufSk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8aDE+e3sgdGl0bGUgfX08L2gxPlxuICAgIDxidXR0b24gQGNsaWNrPVwidG9nZ2xlXCI+Q2xpY2sgbWUgdG8gc2hvdy9oaWRlPC9idXR0b24+XG4gICAgPGRpdiB2LXNob3c9XCJpc09wZW5cIj5Mb3JlbSBpcHN1bSB1c2luZyB2LXNob3c8L2Rpdj5cbiAgICA8ZGl2IHYtaWY9XCJpc09wZW5cIj5Mb3JlbSBpcHN1bSB1c2luZyB2LWlmPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gXCJ2dWVcIjtcblxuaW50ZXJmYWNlIENvbXBvbmVudERhdGEge1xuICB0aXRsZTogc3RyaW5nO1xuICBpc09wZW46IGJvb2xlYW4sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6IFwiRGVtb0NvbXBvbmVudFwiLFxuXG4gIGRhdGEoKTogQ29tcG9uZW50RGF0YSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBcIkRlbW8gQ29tcG9uZW50XCIsXG4gICAgICBpc09wZW46IHRydWUsXG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgdG9nZ2xlKCkge1xuICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gICAgfVxuICB9XG59KTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9jcmVhdGVCbG9jayIsIl9jcmVhdGVWTm9kZSJdLCJtYXBwaW5ncyI6Ijs7QUFpQkEsYUFBZSxlQUFlLENBQUM7SUFDN0IsSUFBSSxFQUFFLGVBQWU7SUFFckIsSUFBSSxFQUFKO1FBQ0UsT0FBTztZQUNMLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsTUFBTSxFQUFFLElBQUk7U0FDYjtLQUNGO0lBRUQsT0FBTyxFQUFFO1FBQ1AsTUFBTTtZQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU07OztDQUcvQixDQUFDOzs7Ozt1QkMvQkFBO0lBQ0VDLHdDQUFPO0lBQ1BBO01BQVMsT0FBSywwQ0FBRSxtQ0FBTTtPQUFFLHVCQUFxQjttQkFDN0NBLHlCQUFxQiwwQkFBd0I7Y0FBaEMsV0FBTTs7S0FDUixXQUFNO3NCQUFqQkQsK0JBQW1CLHdCQUFzQjs7Ozs7Ozs7OzsifQ==
