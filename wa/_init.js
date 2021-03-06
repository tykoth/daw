"use strict";

( function() {

var wctx = new gswaContext(),
	analyser = wctx.ctx.createAnalyser();

analyser.fftSize = 256;
wctx.filters.pushBack( analyser );

window.wa = {
	wctx: wctx,
	ctx: wctx.ctx,
	analyser: analyser,
	analyserArray: new Uint8Array( analyser.frequencyBinCount ),
	composition: wctx.createComposition(),
};

} )();
