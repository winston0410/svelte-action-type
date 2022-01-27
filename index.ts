// REF https://github.com/sveltejs/kit/issues/1549
//  Taken from this repo, as these types should be merged to core later
//  https://github.com/paolotiu/svelte-useactions/blob/main/src/index.ts
/**
 * The return type of an action.
 */
export type ActionReturn<Params> = {
  destroy?: () => void;
  update?: (params: Params) => void;
} | void;

/**
 * Action type shim
 */
export type ActionLike<Node extends HTMLElement> = (
  node: Node,
  params: unknown
) => unknown;

/**
 * A primitive Action
 */
export type Action<Node extends HTMLElement = HTMLElement, Params = unknown> = (
  node: Node,
  params?: Params
) => ActionReturn<Params>;
