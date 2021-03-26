(function() {var implementors = {};
implementors["bitvec"] = [{"text":"impl&lt;R&gt; Sum&lt;BitSel&lt;R&gt;&gt; for BitMask&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: BitRegister,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl&lt;T&gt; Sum&lt;T&gt; for BigInt <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BigInt: Add&lt;T, Output = BigInt&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Sum&lt;T&gt; for BigUint <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BigUint: Add&lt;T, Output = BigUint&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()