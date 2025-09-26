(()=>{var a={};a.id=258,a.ids=[258,636,839],a.modules={8732:a=>{"use strict";a.exports=require("react/jsx-runtime")},22326:a=>{"use strict";a.exports=require("react-dom")},27910:a=>{"use strict";a.exports=require("stream")},29021:a=>{"use strict";a.exports=require("fs")},33873:a=>{"use strict";a.exports=require("path")},34123:a=>{"use strict";a.exports=import("isomorphic-unfetch")},40361:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},46060:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external.js")},47811:(a,b,c)=>{"use strict";c.a(a,async(a,d)=>{try{c.r(b),c.d(b,{config:()=>r,default:()=>n,getServerSideProps:()=>q,getStaticPaths:()=>p,getStaticProps:()=>o,handler:()=>z,reportWebVitals:()=>s,routeModule:()=>y,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>x,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>u,unstable_getStaticProps:()=>t});var e=c(63885),f=c(80237),g=c(81413),h=c(65611),i=c.n(h),j=c(67049),k=c(53879),l=c(12289),m=a([k]);k=(m.then?(await m)():m)[0];let n=(0,g.M)(k,"default"),o=(0,g.M)(k,"getStaticProps"),p=(0,g.M)(k,"getStaticPaths"),q=(0,g.M)(k,"getServerSideProps"),r=(0,g.M)(k,"config"),s=(0,g.M)(k,"reportWebVitals"),t=(0,g.M)(k,"unstable_getStaticProps"),u=(0,g.M)(k,"unstable_getStaticPaths"),v=(0,g.M)(k,"unstable_getStaticParams"),w=(0,g.M)(k,"unstable_getServerProps"),x=(0,g.M)(k,"unstable_getServerSideProps"),y=new e.PagesRouteModule({definition:{kind:f.RouteKind.PAGES,page:"/product/[handle]",pathname:"/product/[handle]",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:j.default,Document:i()},userland:k}),z=(0,l.U)({srcPage:"/product/[handle]",config:r,userland:k,routeModule:y,getStaticPaths:p,getStaticProps:o,getServerSideProps:q});d()}catch(a){d(a)}})},52768:()=>{},53879:(a,b,c)=>{"use strict";c.a(a,async(a,d)=>{try{c.r(b),c.d(b,{default:()=>j});var e=c(8732),f=c(71833),g=c(44233),h=c(82015),i=a([f]);function j(){let{handle:a}=(0,g.useRouter)().query,[b,c]=(0,h.useState)(null);return b?(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"text-3xl font-bold mb-4",children:b.title}),(0,e.jsxs)("div",{className:"grid md:grid-cols-2 gap-4 mb-4",children:[(0,e.jsx)("div",{children:b.images.edges.map(({node:a},c)=>(0,e.jsx)("img",{src:a.transformedSrc,alt:a.altText||b.title,className:"mb-2 w-full"},c))}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"mb-4",children:b.description}),(0,e.jsxs)("p",{className:"font-bold mb-4",children:[b.priceRange.minVariantPrice.amount," ",b.priceRange.minVariantPrice.currencyCode]}),(0,e.jsx)("button",{className:"bg-blue-600 text-white px-4 py-2 rounded",children:"Add to Cart"})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Variants"}),(0,e.jsx)("ul",{className:"list-disc pl-6",children:b.variants.edges.map(({node:a})=>(0,e.jsxs)("li",{children:[a.title," - ",a.priceV2.amount," ",a.priceV2.currencyCode]},a.id))})]})]}):(0,e.jsx)("div",{children:"Loading..."})}f=(i.then?(await i)():i)[0],d()}catch(a){d(a)}})},67049:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>e});var d=c(8732);c(52768),c(76511);let e=function({Component:a,pageProps:b}){return(0,d.jsx)(a,{...b})}},71833:(a,b,c)=>{"use strict";c.a(a,async(a,d)=>{try{c.d(b,{v:()=>h});var e=c(34123),f=a([e]);e=(f.then?(await f)():f)[0];async function g(a,b={}){let c=await (0,e.default)("https://1e0297-a4.myshopify.com/api/2024-04/graphql.json",{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":"ac4c2b983f3d57b26f57fabbbeeb6bed"},body:JSON.stringify({query:a,variables:b})}),d=await c.json();if(d.errors)throw console.error(JSON.stringify(d.errors,null,2)),Error("Shopify query failed");return d.data}async function h(a){let b=`
    query getProduct($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        description
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 5) {
          edges {
            node {
              transformedSrc
              altText
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              priceV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;return(await g(b,{handle:a})).productByHandle}d()}catch(a){d(a)}})},74075:a=>{"use strict";a.exports=require("zlib")},76511:()=>{},82015:a=>{"use strict";a.exports=require("react")}};var b=require("../../webpack-runtime.js");b.C(a);var c=b.X(0,[611,781,929,233],()=>b(b.s=47811));module.exports=c})();