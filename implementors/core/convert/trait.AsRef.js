(function() {var implementors = {};
implementors["anyhow"] = [{"text":"impl AsRef&lt;dyn Error + 'static + Sync + Send&gt; for Error","synthetic":false,"types":[]},{"text":"impl AsRef&lt;dyn Error + 'static&gt; for Error","synthetic":false,"types":[]}];
implementors["arrayvec"] = [{"text":"impl&lt;A&gt; AsRef&lt;str&gt; for ArrayString&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Array&lt;Item = u8&gt; + Copy,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for ArrayVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["bitvec"] = [{"text":"impl&lt;O, V&gt; AsRef&lt;BitSlice&lt;O, &lt;V as BitView&gt;::Store&gt;&gt; for BitArray&lt;O, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: BitView + Sized,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; AsRef&lt;BitSlice&lt;O, T&gt;&gt; for Iter&lt;'_, O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; AsRef&lt;BitSlice&lt;O, T&gt;&gt; for BitBox&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; AsRef&lt;BitSlice&lt;O, T&gt;&gt; for Drain&lt;'_, O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; AsRef&lt;BitSlice&lt;O, T&gt;&gt; for BitVec&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl AsRef&lt;[u8]&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for BytesMut","synthetic":false,"types":[]}];
implementors["darling_core"] = [{"text":"impl AsRef&lt;Ident&gt; for IdentString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for IdentString","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;T&gt; for SpannedValue&lt;T&gt;","synthetic":false,"types":[]}];
implementors["der_parser"] = [{"text":"impl&lt;'a&gt; AsRef&lt;[u8]&gt; for BitStringObject&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["either"] = [{"text":"impl&lt;L, R, Target&gt; AsRef&lt;Target&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;Target&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;Target&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R&gt; AsRef&lt;str&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;str&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;str&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R, Target&gt; AsRef&lt;[Target]&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;[Target]&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;[Target]&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["log"] = [{"text":"impl&lt;'k&gt; AsRef&lt;str&gt; for Key&lt;'k&gt;","synthetic":false,"types":[]}];
implementors["rc_crypto"] = [{"text":"impl AsRef&lt;[u8]&gt; for Digest","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Signature","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl AsRef&lt;[u8]&gt; for Literal","synthetic":false,"types":[]}];
implementors["ring"] = [{"text":"impl&lt;A&gt; AsRef&lt;[u8]&gt; for Aad&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: AsRef&lt;[u8]&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Tag","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8; 12]&gt; for Nonce","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for PublicKey","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Digest","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Tag","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Document","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for RsaSubjectPublicKey","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Signature","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for ArrayVec&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'s, T&gt; AsRef&lt;[T]&gt; for SliceVec&lt;'s, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for TinyVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl AsRef&lt;str&gt; for Url","synthetic":false,"types":[]}];
implementors["viaduct"] = [{"text":"impl AsRef&lt;str&gt; for HeaderName","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for HeaderName","synthetic":false,"types":[]}];
implementors["wyz"] = [{"text":"impl&lt;T:&nbsp;Binary&gt; AsRef&lt;T&gt; for FmtBinary&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Display&gt; AsRef&lt;T&gt; for FmtDisplay&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;LowerExp&gt; AsRef&lt;T&gt; for FmtLowerExp&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;LowerHex&gt; AsRef&lt;T&gt; for FmtLowerHex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Octal&gt; AsRef&lt;T&gt; for FmtOctal&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Pointer&gt; AsRef&lt;T&gt; for FmtPointer&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;UpperExp&gt; AsRef&lt;T&gt; for FmtUpperExp&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;UpperHex&gt; AsRef&lt;T&gt; for FmtUpperHex&lt;T&gt;","synthetic":false,"types":[]}];
implementors["x509_parser"] = [{"text":"impl&lt;'a&gt; AsRef&lt;[u8]&gt; for TbsCertificate&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;[u8]&gt; for TbsCertList&lt;'a&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()