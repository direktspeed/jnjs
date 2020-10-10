const ByteBuffer = Java.type('java.nio.ByteBuffer');

class createByteBuffer extends ArrayBuffer {
  constructor(...args) {
    super(...args);
    if (args[0] && Java.isJavaObject(args[0]) && args[0] instanceof ByteBuffer) {
      Object.defineProperty(this, "__jbuffer", {
        value: args[0]
      });
    }
  }
}

globalThis.ArrayBuffer = createByteBuffer;
