import { createFileRoute } from "@tanstack/react-router";
import { Studio } from "@/components/app/studio";

export const Route = createFileRoute("/")({ component: Studio });
