import { createContextId } from "@builder.io/qwik";
import type { User } from "firebase/auth";

export const UserContext = createContextId<User>('user')