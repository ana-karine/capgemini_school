import{a as z}from"./chunk-7WEDBAY3.js";import{Ba as I,C as P,D as g,G as p,Ga as V,H as m,Ha as k,Ia as N,Ja as F,M as O,Qa as j,R as c,S as _,Sa as S,Ua as D,Xa as B,_ as d,_a as R,ab as q,ca as x,ea as o,fa as a,ga as v,gb as $,ha as b,ja as C,la as u,pa as T,qa as l,ra as E,sa as y,va as M,wa as w,y as f}from"./chunk-PRAWDY7H.js";function U(i,t){if(i&1){let r=b();o(0,"li"),v(1,"img",6),o(2,"p"),l(3),a(),o(4,"p"),l(5),M(6,"currency"),a(),o(7,"label"),l(8," Quantidade: "),o(9,"input",7),C("ngModelChange",function(e){let s=p(r).$implicit;return m(s.quantidade=e)})("change",function(){p(r);let e=u(2);return m(e.calcularTotal())}),a()(),o(10,"button",8),C("click",function(){let h=p(r).$implicit,s=u(2);return m(s.removerProdutoCarrinho(h.id))}),v(11,"i",9),a()()}if(i&2){let r=t.$implicit;c(1),d("src",r.imagem,O),c(2),E(r.descricao),c(2),y("Pre\xE7o: ",w(6,4,r.preco,"BRL"),""),c(4),d("ngModel",r.quantidade)}}function G(i,t){if(i&1){let r=b();o(0,"div")(1,"ul"),x(2,U,12,7,"li",3),a(),o(3,"h2",4),l(4),M(5,"currency"),a(),o(6,"button",5),C("click",function(){p(r);let e=u();return m(e.comprar())}),l(7,"Comprar"),a()()}if(i&2){let r=u();c(2),d("ngForOf",r.itensCarrinho),c(2),y("Total: ",w(5,2,r.total,"BRL"),"")}}function H(i,t){i&1&&l(0,"Nenhum produto foi adicionado ao carrinho")}var L=(()=>{let t=class t{constructor(n,e){this.carrinhoService=n,this.router=e,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.carrinhoService.obterDoCarrinho(),this.calcularTotal()}calcularTotal(){this.total=this.itensCarrinho.reduce((n,e)=>n+e.preco*e.quantidade,0)}removerProdutoCarrinho(n){this.itensCarrinho=this.itensCarrinho.filter(e=>e.id!==n),this.carrinhoService.removerDoCarrinho(n),this.calcularTotal()}comprar(){alert("Parab\xE9ns, voc\xEA finalizou a sua compra!"),this.carrinhoService.limparCarrinho(),this.router.navigate(["produtos"])}};t.\u0275fac=function(e){return new(e||t)(_(z),_(j))},t.\u0275cmp=P({type:t,selectors:[["app-carrinho"]],decls:5,vars:2,consts:[[1,"cart-title"],[4,"ngIf","ngIfElse"],["semProduto",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],[3,"src"],["type","number",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(e,h){if(e&1&&(o(0,"h2",0),l(1,"Carrinho"),a(),x(2,G,8,5,"div",1)(3,H,1,0,"ng-template",null,2,I)),e&2){let s=T(4);c(2),d("ngIf",h.itensCarrinho.length>0)("ngIfElse",s)}},dependencies:[V,k,D,q,B,R,N],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]});let i=t;return i})();var J=[{path:"",component:L}],Q=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g({type:t}),t.\u0275inj=f({imports:[S.forChild(J),S]});let i=t;return i})();var lt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g({type:t}),t.\u0275inj=f({imports:[F,Q,$]});let i=t;return i})();export{lt as CarrinhoModule};
