import{c as n}from"./app.f0b58fb0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> Type</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><ol><li><code>Type</code> is a pipe that is used as a parameter type.</li><li>Both <code>Method</code> and <code>Data</code> pipes are also types.</li></ol><p><code>Type</code> example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Invoke<span class="token punctuation">\\</span>Type</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Invoke<span class="token punctuation">\\</span>Pipeline</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Invoke<span class="token punctuation">\\</span>Types<span class="token punctuation">\\</span>StringType</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Location name type.
 * 
 * Example: \`Lukasha Street, 5, Lviv, Ukraine\`
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">LocationName</span> <span class="token keyword">implements</span> <span class="token class-name">Type</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$value</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">pass</span><span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ensure that the passed value is a string</span>
        <span class="token comment">// and store it inside a variable to use to later</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">value</span> <span class="token operator">=</span> <span class="token class-name static-context">Pipeline</span><span class="token operator">::</span><span class="token function">pass</span><span class="token punctuation">(</span><span class="token class-name static-context">StringType</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token variable">$value</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">fetchInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$info</span> <span class="token operator">=</span> <span class="token comment">// fetch some detailed info from external service</span>
        
        <span class="token keyword">return</span> <span class="token variable">$info</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// @override</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;string&lt;locationName&gt;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>Usage with a method:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">SomeMethod</span> <span class="token keyword">extends</span> <span class="token class-name">Method</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name type-declaration">LocationName</span> <span class="token variable">$locationName</span><span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$locationInfo</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">locationName</span><span class="token operator">-&gt;</span><span class="token function">fetchInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="builtin-types" tabindex="-1"><a class="header-anchor" href="#builtin-types" aria-hidden="true">#</a> Builtin types</h2><p>There are few basic types predefined by Invoke.</p><ul><li><code>Invoke\\Types\\AnyType</code> - does not validate</li><li><code>Invoke\\Types\\ArrayType</code> - validates arrays</li><li><code>Invoke\\Types\\BoolType</code> - validates booleans</li><li><code>Invoke\\Types\\FloatType</code> - validates floats</li><li><code>Invoke\\Types\\IntType</code> - validates integers</li><li><code>Invoke\\Types\\NullType</code> - validates nulls</li><li><code>Invoke\\Types\\StringType</code> - validates string</li><li><code>Invoke\\Types\\UnionType</code> - validates union of types</li></ul>`,10);function p(t,o){return e}var i=s(a,[["render",p]]);export{i as default};
