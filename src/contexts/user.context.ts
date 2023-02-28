import { createContextId } from "@builder.io/qwik";
import type { User, UserInfo } from "firebase/auth";

export const UserContext = createContextId<UserInfo>('user')