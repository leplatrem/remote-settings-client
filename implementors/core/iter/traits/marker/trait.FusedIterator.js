(function() {var implementors = {};
implementors["bitvec"] = [{"text":"impl&lt;T&gt; FusedIterator for Domain&lt;'_, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; FusedIterator for Iter&lt;'_, O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; FusedIterator for IterMut&lt;'_, O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; FusedIterator for Windows&lt;'_, O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; FusedIterator for Chunks&lt;'_, O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; FusedIterator for ChunksMut&lt;'_, O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; FusedIterator for ChunksExact&lt;'_, O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; FusedIterator for ChunksExactMut&lt;'_, O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; FusedIterator for RChunks&lt;'_, O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; FusedIterator for RChunksMut&lt;'_, O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; FusedIterator for RChunksExact&lt;'_, O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; FusedIterator for RChunksExactMut&lt;'_, O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, O, T, P&gt; FusedIterator for Split&lt;'a, O, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: 'a + BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + BitStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: FnMut(usize, &amp;bool) -&gt; bool,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, O, T, P&gt; FusedIterator for SplitMut&lt;'a, O, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: 'a + BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + BitStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: FnMut(usize, &amp;bool) -&gt; bool,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, O, T, P&gt; FusedIterator for RSplit&lt;'a, O, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: 'a + BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + BitStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: FnMut(usize, &amp;bool) -&gt; bool,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, O, T, P&gt; FusedIterator for RSplitMut&lt;'a, O, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: 'a + BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + BitStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: FnMut(usize, &amp;bool) -&gt; bool,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T, P&gt; FusedIterator for SplitN&lt;'_, O, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: FnMut(usize, &amp;bool) -&gt; bool,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T, P&gt; FusedIterator for SplitNMut&lt;'_, O, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: FnMut(usize, &amp;bool) -&gt; bool,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T, P&gt; FusedIterator for RSplitN&lt;'_, O, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: FnMut(usize, &amp;bool) -&gt; bool,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T, P&gt; FusedIterator for RSplitNMut&lt;'_, O, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: FnMut(usize, &amp;bool) -&gt; bool,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; FusedIterator for IntoIter&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T&gt; FusedIterator for Drain&lt;'_, O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;O, T, I&gt; FusedIterator for Splice&lt;'_, O, T, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: BitOrder,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: BitStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Iterator&lt;Item = bool&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl FusedIterator for U32Digits&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl FusedIterator for U64Digits&lt;'_&gt;","synthetic":false,"types":[]}];
implementors["regex"] = [{"text":"impl&lt;'r, 't&gt; FusedIterator for Matches&lt;'r, 't&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'r, 't&gt; FusedIterator for CaptureMatches&lt;'r, 't&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'r, 't&gt; FusedIterator for Split&lt;'r, 't&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'r, 't&gt; FusedIterator for SplitN&lt;'r, 't&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'r&gt; FusedIterator for CaptureNames&lt;'r&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'c, 't&gt; FusedIterator for SubCaptureMatches&lt;'c, 't&gt;","synthetic":false,"types":[]},{"text":"impl FusedIterator for SetMatchesIntoIter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FusedIterator for SetMatchesIter&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl FusedIterator for SetMatchesIntoIter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FusedIterator for SetMatchesIter&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'r&gt; FusedIterator for CaptureNames&lt;'r&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'r, 't&gt; FusedIterator for Split&lt;'r, 't&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'r, 't&gt; FusedIterator for SplitN&lt;'r, 't&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'c, 't&gt; FusedIterator for SubCaptureMatches&lt;'c, 't&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'r, 't&gt; FusedIterator for CaptureMatches&lt;'r, 't&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'r, 't&gt; FusedIterator for Matches&lt;'r, 't&gt;","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl FusedIterator for Utf8Sequences","synthetic":false,"types":[]}];
implementors["serde_json"] = [{"text":"impl&lt;'de, R, T&gt; FusedIterator for StreamDeserializer&lt;'de, R, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Read&lt;'de&gt; + Fused,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FusedIterator for Iter&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FusedIterator for IterMut&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl FusedIterator for IntoIter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FusedIterator for Keys&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FusedIterator for Values&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FusedIterator for ValuesMut&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;'p, A, I&gt; FusedIterator for ArrayVecSplice&lt;'p, A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Array,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Iterator&lt;Item = A::Item&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; FusedIterator for ArrayVecIterator&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;'a + Default&gt; FusedIterator for ArrayVecDrain&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'p, 's, T:&nbsp;Default&gt; FusedIterator for SliceVecDrain&lt;'p, 's, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'p, A, I&gt; FusedIterator for TinyVecSplice&lt;'p, A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Array,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Iterator&lt;Item = A::Item&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; FusedIterator for TinyVecIterator&lt;A&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()