import { ApiProperty } from "@nestjs/swagger";
import { SearchParams } from "typesense/lib/Typesense/Documents";

export class SearchDocumentArgs implements SearchParams {
  @ApiProperty({
    required: true,
    type: String,
  })
  q: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  query_by: string | string[];
  query_by_weights?: string | number[];
  prefix?: string | boolean | boolean[];
  filter_by?: string;
  sort_by?: string | string[];
  facet_by?: string | string[];
  max_facet_values?: number;
  facet_query?: string;
  facet_query_num_typos?: number;
  page?: number;
  per_page?: number;
  group_by?: string | string[];
  group_limit?: number;
  include_fields?: string | string[];
  exclude_fields?: string | string[];
  highlight_fields?: string | string[];
  highlight_full_fields?: string | string[];
  highlight_affix_num_tokens?: number;
  highlight_start_tag?: string;
  highlight_end_tag?: string;
  snippet_threshold?: number;
  num_typos?: string | number | number[];
  min_len_1typo?: number;
  min_len_2typo?: number;
  split_join_tokens?: "off" | "always" | "fallback";
  exhaustive_search?: boolean;
  drop_tokens_threshold?: number;
  typo_tokens_threshold?: number;
  pinned_hits?: string | string[];
  hidden_hits?: string | string[];
  limit_hits?: number;
  pre_segmented_query?: boolean;
  enable_overrides?: boolean;
  prioritize_exact_match?: boolean;
  prioritize_token_position?: boolean;
  search_cutoff_ms?: number;
  use_cache?: boolean;
  max_candidates?: number;
  infix?: ("off" | "always" | "fallback") | ("off" | "always" | "fallback")[];
  preset?: string;
  text_match_type?: "max_score" | "max_weight";
  vector_query?: string;


}