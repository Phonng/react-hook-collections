import { useRef } from "react"

type InitFn<T> = () => T

// #TODO: Need try to public this file and use as a lib
export function useConst<T extends any>(init: T | InitFn<T>): T {
	const ref = useRef<T | null>(null)

	if (ref.current === null) {
		ref.current = typeof init === "function" ? (init as InitFn<T>)() : init
	}

	return ref.current as T
}