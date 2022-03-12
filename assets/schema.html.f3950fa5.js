import{c as n}from"./app.f0b58fb0.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h1 id="schema" tabindex="-1"><a class="header-anchor" href="#schema" aria-hidden="true">#</a> Schema</h1><p>Invoke has built-in schema generation. It allows you to create documentation with list and descriptions of available methods and types automatically.</p><h2 id="schemadocument" tabindex="-1"><a class="header-anchor" href="#schemadocument" aria-hidden="true">#</a> <code>SchemaDocument</code></h2><p><code>SchemaDocument</code> is a <code>Data</code> type that contains information about available methods and types.</p><p>Example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Invoke<span class="token punctuation">\\</span>Schema<span class="token punctuation">\\</span>SchemaDocument</span><span class="token punctuation">;</span>

<span class="token variable">$currentSchema</span> <span class="token operator">=</span> <span class="token class-name static-context">SchemaDocument</span><span class="token operator">::</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="methoddocument" tabindex="-1"><a class="header-anchor" href="#methoddocument" aria-hidden="true">#</a> <code>MethodDocument</code></h2><p><code>MethodDocument</code> is a <code>Data</code> type that contains information about a method.</p><p>Example 1:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Invoke<span class="token punctuation">\\</span>Schema<span class="token punctuation">\\</span>MethodDocument</span><span class="token punctuation">;</span>

<span class="token variable">$methodDocument</span> <span class="token operator">=</span> <span class="token class-name static-context">MethodDocument</span><span class="token operator">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;dec2hex&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;method&quot;</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">Dec2Hex</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Example 2:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Invoke<span class="token punctuation">\\</span>Schema<span class="token punctuation">\\</span>MethodDocument</span><span class="token punctuation">;</span>

<span class="token variable">$methodDocument</span> <span class="token operator">=</span> <span class="token class-name static-context">MethodDocument</span><span class="token operator">::</span><span class="token function">byName</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;dec2hex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="paramdocument" tabindex="-1"><a class="header-anchor" href="#paramdocument" aria-hidden="true">#</a> <code>ParamDocument</code></h2><p><code>ParamDocument</code> is a <code>Data</code> type that contains information about a parameter.</p><p>Example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Invoke<span class="token punctuation">\\</span>Schema<span class="token punctuation">\\</span>ParamDocument</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Invoke<span class="token punctuation">\\</span>Schema<span class="token punctuation">\\</span>TypeDocument</span><span class="token punctuation">;</span>

<span class="token variable">$paramDocument</span> <span class="token operator">=</span> <span class="token class-name static-context">ParamDocument</span><span class="token operator">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;dec2hex&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;type&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;Types\\SomeType:someType&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;isOptional&quot;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;defaultValue&quot;</span> <span class="token operator">=&gt;</span> <span class="token constant">null</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;validators&quot;</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">ValidatorDocument</span><span class="token operator">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="typedocument" tabindex="-1"><a class="header-anchor" href="#typedocument" aria-hidden="true">#</a> <code>TypeDocument</code></h2><p><code>TypeDocument</code> is a <code>Data</code> type that contains information about a type.</p><p>Example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Invoke<span class="token punctuation">\\</span>Schema<span class="token punctuation">\\</span>TypeDocument</span><span class="token punctuation">;</span>

<span class="token variable">$typeDocument</span> <span class="token operator">=</span> <span class="token class-name static-context">TypeDocument</span><span class="token operator">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token class-name static-context">SomeData</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="getschema" tabindex="-1"><a class="header-anchor" href="#getschema" aria-hidden="true">#</a> <code>GetSchema</code></h2><p><code>GetSchema</code> is a method that returns current <code>SchemaDocument</code>.</p><p>Example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Invoke<span class="token punctuation">\\</span>Invoke</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Invoke<span class="token punctuation">\\</span>Docs<span class="token punctuation">\\</span>Methods<span class="token punctuation">\\</span>GetSchema</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Invoke</span><span class="token operator">::</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string double-quoted-string">&quot;getSchema&quot;</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">GetSchema</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// curl &#39;localhost:5000/invoke/getSchema&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,24);function t(p,o){return e}var u=a(s,[["render",t]]);export{u as default};
