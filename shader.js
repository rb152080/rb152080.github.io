const canvas = document.getElementById("warp");
const gl = canvas.getContext("webgl");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    gl.viewport(
        0,
        0,
        canvas.width,
        canvas.height
    );
}

window.addEventListener("resize", resize);
resize();


const vertexShader = `
attribute vec2 position;

void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
`;


const fragmentShader = `
precision highp float;

uniform float time;
uniform vec2 resolution;


void main() {

    vec2 uv = gl_FragCoord.xy / resolution.xy;

    uv -= 0.5;

    float t = time * 0.3;


    float warp =
        sin(uv.x * 5.0 + t)
        *
        cos(uv.y * 5.0 + t);


    warp += sin(
        length(uv) * 10.0 - t
    );


    vec3 base = vec3(
        0.109, // #1c1c1c
        0.109,
        0.109
    );


    vec3 teal = vec3(
        0.37, // #5f8787
        0.53,
        0.53
    );


    vec3 purple = vec3(
        0.84, // #d7afd7
        0.68,
        0.84
    );


    vec3 color = mix(
        teal,
        purple,
        warp * 0.5 + 0.5
    );


    color *= 0.25;


    color += base;


    gl_FragColor = vec4(
        color,
        1.0
    );
}
`;


function createShader(type, source) {

    const shader = gl.createShader(type);

    gl.shaderSource(
        shader,
        source
    );

    gl.compileShader(shader);

    return shader;
}


const program = gl.createProgram();


gl.attachShader(
    program,
    createShader(
        gl.VERTEX_SHADER,
        vertexShader
    )
);


gl.attachShader(
    program,
    createShader(
        gl.FRAGMENT_SHADER,
        fragmentShader
    )
);


gl.linkProgram(program);

gl.useProgram(program);



const vertices = new Float32Array([
    -1,-1,
     1,-1,
    -1, 1,

    -1, 1,
     1,-1,
     1, 1
]);


const buffer = gl.createBuffer();

gl.bindBuffer(
    gl.ARRAY_BUFFER,
    buffer
);

gl.bufferData(
    gl.ARRAY_BUFFER,
    vertices,
    gl.STATIC_DRAW
);


const position = gl.getAttribLocation(
    program,
    "position"
);


gl.enableVertexAttribArray(position);


gl.vertexAttribPointer(
    position,
    2,
    gl.FLOAT,
    false,
    0,
    0
);


const timeLocation =
    gl.getUniformLocation(
        program,
        "time"
    );


const resolutionLocation =
    gl.getUniformLocation(
        program,
        "resolution"
    );



function animate(time) {

    gl.uniform1f(
        timeLocation,
        time * 0.001
    );


    gl.uniform2f(
        resolutionLocation,
        canvas.width,
        canvas.height
    );


    gl.drawArrays(
        gl.TRIANGLES,
        0,
        6
    );


    requestAnimationFrame(animate);
}


requestAnimationFrame(animate);
