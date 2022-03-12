import{r as e,o as p,a as t,b as n,e as c,w as l,F as o,d as s,c as r}from"./app.f0b58fb0.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=n("h1",{id:"data",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#data","aria-hidden":"true"},"#"),s(" Data")],-1),k=n("code",null,"Data",-1),b=s(" is a "),m=n("code",null,"Type",-1),f=s(" pipe with parameters."),h=n("li",null,"Used to define strictly typed data structures.",-1),_=r(`<p><code>Data</code> example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Invoke<span class="token punctuation">\\</span>Data</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UserPreferences</span> <span class="token keyword">extends</span> <span class="token class-name">Data</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">bool</span> <span class="token variable">$darkMode</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword type-declaration">bool</span> <span class="token variable">$receiveEmails</span><span class="token punctuation">;</span>
    
    <span class="token comment">// etc..</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Usage with a method:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Invoke<span class="token punctuation">\\</span>Method</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UpdateUserPreferences</span> <span class="token keyword">extends</span> <span class="token class-name">Method</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">int</span> <span class="token variable">$userId</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name type-declaration">UserPreferences</span> <span class="token variable">$preferences</span><span class="token punctuation">;</span>
    
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">UserPreferences</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$updatedPreferences</span> <span class="token operator">=</span> <span class="token comment">/* update preferences */</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token class-name static-context">UserPreferences</span><span class="token operator">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token variable">$updatedPreferences</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,4);function y(v,w){const a=e("RouterLink");return p(),t(o,null,[d,n("ol",null,[n("li",null,[k,b,c(a,{to:"/guide/type.html"},{default:l(()=>[m]),_:1}),f]),h]),_],64)}var U=i(u,[["render",y]]);export{U as default};
