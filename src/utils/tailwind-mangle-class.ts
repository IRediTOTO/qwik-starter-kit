// @ts-ignore
import incstr from "incstr";
import type { PluginOption } from "vite";

const classNames = new Map();
const generateClassName = incstr.idGenerator({
  alphabet: "abcdefghijklmnopqrstuvwxyz",
});

// const magicRegex = createRegExp(word.after);
// class="tw-relative tw-left-[calc(50%-11rem)] tw--z-10 tw-h-[21.1875rem] tw-max-w-none tw--translate-x-1/2 tw-rotate-[30deg] sm:tw-left-[calc(50%-30rem)] sm:tw-h-[42.375rem]"
// const twRegex =
//   /(([a-zA-Z-:]*)[\\\\\\\\]*:)*([\\\\\\\\]*!)?tw-[a-zA-Z-]([a-zA-Z0-9-]*([\\\\\\\\]*(\\%|\\#|\\.|\\[|\\]))*)*/g;
const twJsRegex =
  /(([a-zA-Z-:]*)[\\\\\\\\]*:)*([\\\\\\\\]*!)?tw-[a-zA-Z-]([a-zA-Z0-9-]*([\\\\\\\\]*(\\%|\\#|\\.|\\\[|\\\]|\[|\(|%|\)|\]|\.|\+|\/))*)*/;
// /(([a-zA-Z-:]*)[\\\\\\\\]*:)*([\\\\\\\\]*!)?tw-[a-zA-Z-]([a-zA-Z0-9-]*([\\\\\\\\]*(\\%|\\#|\\.|\\\[|\\]|\[|\]|\/|\(|%|\)|\.))*([^(\)\s)(\),)(\);)(:\s)\"]))*/g;
const twRegex =
  /\.((([a-zA-Z-:]*)[\\\\\\\\]*:)*([\\\\\\\\]*!)?tw-([a-z]*)(-?(([\w\d\\\/\.])|(\[([^\s]*)\])))*)/;

export function myPlugin(): PluginOption {
  return {
    name: "my-plugin",
    apply: "build",
    enforce: "post",
    transform(code, id, options) {
      // console.log("id", id);

      // return code;
      let rawSource = code;

      if (id.match(/.+\.css.*$/)) {
        // return rawSource;

        let m;
        while ((m = twRegex.exec(rawSource)) !== null) {
          // ignore infinite loop
          if (m.index === twRegex.lastIndex) {
            twRegex.lastIndex++;
          }
          const originName = m[1];
          let target = originName.replace(/\\+/g, "");

          if (!classNames.has(target)) {
            const newClass = generateClassName();
            classNames.set(target, newClass);
          }
          rawSource = rawSource.replace(originName, classNames.get(target));
        }
        // console.log("css Classes", classNames);

        return rawSource;
      } else {
        // return rawSource;

        const findClasses = rawSource.match(new RegExp(twJsRegex, "g"));

        if (!findClasses?.length) {
          return rawSource;
        }
        findClasses?.map((i) => {
          if (!classNames.has(i)) {
            const newClass = generateClassName();
            classNames.set(i, newClass);
          }
          try {
            rawSource = rawSource.replace(i, classNames.get(i));
          } catch (error) { }
        });

        // console.log("js classes", classNames);

        return rawSource;
      }
    },
  };
}