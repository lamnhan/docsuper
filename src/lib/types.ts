import { TypedocConfigs } from './services/typedoc';
import { Block, ContentService } from './services/content';
import { ConvertOptions } from './services/convert';
import { Rendering } from './services/render';

import { Declaration } from './declaration';

/**
 * Custom generator options
 *
 * Options can be provided in 3 ways:
 *
 * - Under the __@lamnhan/docsuper__ property of `package.json` file
 * - The `docsuper.config.js` file for more advanced config
 * - By the `options` param when init new [[docsuper | `docsuper(options?)`]] instance.
 *
 */
export interface Options {
  /**
   * Custom API reference url, default to the Github Pages repo url
   */
  apiUrl?: string;
  /**
   * Detail API generator
   */
  apiGenerator?: 'typedoc' | 'none';
  /**
   * Custom [Typedoc](https://typedoc.org) config
   */
  typedoc?: TypedocConfigs;
  /**
   * List of documents to be generated: __key__ is the path to the document and __value__ is a template name or a rendering input
   */
  files?: {
    [path: string]: BuiltinTemplate | Rendering;
  };
  /**
   * Additional converts, see [[AdditionalConverts]]
   */
  converts?: AdditionalConverts;
  /**
   * No generator footer attribution
   */
  noAttr?: boolean;
}

export type BuiltinTemplate = 'mini' | 'full';

export type AdditionalConvert = (
  declaration: Declaration,
  options: ConvertOptions,
  $Content: ContentService
) => Block[];

export interface AdditionalConverts {
  [output: string]: AdditionalConvert;
}
