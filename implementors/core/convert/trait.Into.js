(function() {var implementors = {};
implementors["bitvec"] = [{"text":"impl&lt;O, T&gt; Into&lt;Box&lt;[T], Global&gt;&gt; for BitBox&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; Into&lt;Vec&lt;T, Global&gt;&gt; for BitVec&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["either"] = [{"text":"impl&lt;L, R&gt; Into&lt;Result&lt;R, L&gt;&gt; for Either&lt;L, R&gt;","synthetic":false,"types":[]}];
implementors["itertools"] = [{"text":"impl&lt;A, B&gt; Into&lt;Option&lt;Either&lt;A, B&gt;&gt;&gt; for EitherOrBoth&lt;A, B&gt;","synthetic":false,"types":[]}];
implementors["unicode_bidi"] = [{"text":"impl Into&lt;u8&gt; for Level","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()