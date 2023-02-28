import {
  component$,
  Slot,
  useBrowserVisibleTask$,
  useContextProvider,
  useSignal,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import { onAuthStateChanged, User, UserInfo } from "firebase/auth";
import { UserContext } from "~/contexts/user.context";
import { firebaseAuth } from "~/firebase/config";
import Header from "../components/header/header";

export default component$(() => {
  const userStore = useSignal<UserInfo>({} as User);
  console.log("userStore", userStore);

  useContextProvider(UserContext, userStore.value);

  useBrowserVisibleTask$(({ cleanup, track }) => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log(user.email);
        userStore.value = user.toJSON() as UserInfo;
        console.log("user.toJSON()", user.toJSON());
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  });

  return (
    <>
      <main class="bg-gradient-to-r from-pink-400 to-purple-200">
        <Header />

        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
