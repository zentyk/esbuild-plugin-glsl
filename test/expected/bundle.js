// test/src/shader.frag
var shader_default = "#include <something>\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n\n	uniform highp sampler2D buffer;\n\n#else\n\n	uniform mediump sampler2D buffer;\n\n#endif\n\nuniform mat4 m4;\nvarying vec2 vUv;\n\n/**\n * Multiline\n * comment\n */\n\nfloat testInnerMacros(const in float x) {\n\n	#ifdef MUTE_X\n\n		return 0.0;\n\n	#else\n\n		return x;\n\n	#endif\n\n}\n\nvoid main() {\n\n	int taps = 0;\n\n	for(int i = 0; i < SAMPLES_INT; ++i) {\n\n		++taps;\n\n	}\n\n	// Test weird else if\n	if(taps === 0) {\n\n		gl_FragColor.r = 1.0;\n\n	} else\n	if (taps === 10) {\n\n		gl_FragColor.g = 1.0;\n\n	}\n	else\n	{\n		gl_FragColor.b = 1.0;\n	}\n\n	gl_FragColor.a = (taps == 42) ? 1.0 : 0.0;\n\n}\n";

// test/src/index.ts
console.log(shader_default);
