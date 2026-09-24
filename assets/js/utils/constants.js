/* ==========================================================================
   GLOBAL CONSTANTS (constants.js)
   Centralized static configuration and asset references across JavaScript files.
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. TYPEWRITER TERMINAL CONSTANTS (script.js)
// --------------------------------------------------------------------------
const TERMINAL_LINES = [
  "bash-3.2$ who am i",
  "Sourav Rajvi",
  "bash-3.2$ ls",
  "Artwork Desktop Downloads Music Documents Homework",
  "bash-3.2$ uname -a",
  "Linux archlinux 6.5.8-arch1-1 #1 SMP PREEMPT_DYNAMIC Thu, 19 Oct 2022 22:52:14 +0000 x86_64 GNU/Linux",
];

// --------------------------------------------------------------------------
// 2. ABOUT PAGE — MERGED PRs GALLERY CONSTANTS (about.js)
// --------------------------------------------------------------------------
const PR_ITEMS_PER_PAGE = 12;
const PR_LIST = [
  { repo: "infiniflow/ragflow", number: 20014, title: "fix(deps): use numpy 2.x wheels on Python 3.13 (#19928)", url: "https://github.com/infiniflow/ragflow/pull/20014" },
  { repo: "langgenius/dify", number: 42486, title: "refactor(web): defer tldts load for MCP favicon URL blur", url: "https://github.com/langgenius/dify/pull/42486" },
  { repo: "infiniflow/ragflow", number: 19742, title: "feat(connector): add Zotero as a data source", url: "https://github.com/infiniflow/ragflow/pull/19742" },
  { repo: "unslothai/unsloth", number: 10849, title: "fix(studio): bundle hf-xet for Desktop large Hub downloads", url: "https://github.com/unslothai/unsloth/pull/10849" },
  { repo: "langgenius/dify-plugin-daemon", number: 820, title: "fix(endpoint): keep session alive after webhook client disconnect", url: "https://github.com/langgenius/dify-plugin-daemon/pull/820" },
  { repo: "langgenius/dify-plugin-daemon", number: 821, title: "feat(metrics): expose plugin_daemon invoke and process Prometheus metrics", url: "https://github.com/langgenius/dify-plugin-daemon/pull/821" },
  { repo: "langgenius/dify", number: 41300, title: "fix(api): grant in-run tool files to later workflow nodes", url: "https://github.com/langgenius/dify/pull/41300" },
  { repo: "langgenius/dify", number: 42479, title: "chore(web): optimize in-site notification header background asset", url: "https://github.com/langgenius/dify/pull/42479" },
  { repo: "langgenius/dify", number: 42517, title: "fix(web): align nuqs peer context for nuqs-jotai dev resolution", url: "https://github.com/langgenius/dify/pull/42517" },
  { repo: "infiniflow/ragflow", number: 19856, title: "feat(models): add OpenAI GPT-5.6 model family", url: "https://github.com/infiniflow/ragflow/pull/19856" },
  { repo: "langgenius/dify", number: 42481, title: "fix: wire UV_CACHE_DIR for plugin_daemon (Fixes #42433)", url: "https://github.com/langgenius/dify/pull/42481" },
  { repo: "langgenius/dify-plugin-daemon", number: 819, title: "fix: use container-local UV cache dir for plugin dependencies (Fixes langgenius/dify#42433)", url: "https://github.com/langgenius/dify-plugin-daemon/pull/819" },
  { repo: "unslothai/unsloth", number: 10642, title: "feat(studio): consistent SSH restrictions with approved-server allowlist", url: "https://github.com/unslothai/unsloth/pull/10642" },
  { repo: "infiniflow/ragflow", number: 19478, title: "fix(ingestion): enforce text-only pre-index wire contract", url: "https://github.com/infiniflow/ragflow/pull/19478" },
  { repo: "unslothai/unsloth", number: 10708, title: "Studio: add Download Dataset button for Data Recipes", url: "https://github.com/unslothai/unsloth/pull/10708" },
  { repo: "unslothai/unsloth", number: 10851, title: "fix(studio): share Run settings draft across sidebar and model picker", url: "https://github.com/unslothai/unsloth/pull/10851" },
  { repo: "unslothai/unsloth", number: 10253, title: "Studio: drop MediaPageLink tooltip below titlebar controls on Windows", url: "https://github.com/unslothai/unsloth/pull/10253" },
  { repo: "infiniflow/ragflow", number: 18889, title: "feat(api): add image_update_mode for chunk image updates", url: "https://github.com/infiniflow/ragflow/pull/18889" },
  { repo: "infiniflow/ragflow", number: 18787, title: "fix(wiki): stamp retrieval fields so compiled pages are searchable", url: "https://github.com/infiniflow/ragflow/pull/18787" },
  { repo: "infiniflow/ragflow", number: 19237, title: "fix(parser): handle large sparse spreadsheets, JSON BOM, and XLSX QA chunking", url: "https://github.com/infiniflow/ragflow/pull/19237" },
  { repo: "langgenius/dify-plugin-sdks", number: 385, title: "fix(entities): add BINARY_LINK to InvokeMessage.MessageType", url: "https://github.com/langgenius/dify-plugin-sdks/pull/385" },
  { repo: "we-like-parsers/pegen", number: 118, title: "Fix f-string conversion specifiers on Python 3.12+", url: "https://github.com/we-like-parsers/pegen/pull/118" },
  { repo: "langgenius/dify", number: 42162, title: "fix(web): send model delete params as query string on DELETE", url: "https://github.com/langgenius/dify/pull/42162" },
  { repo: "infiniflow/ragflow", number: 19475, title: "fix(web): prevent DOCX preview infinite update loop", url: "https://github.com/infiniflow/ragflow/pull/19475" },
  { repo: "Scenic-Foundation/Scenic", number: 501, title: "Fix f-string conversion specifiers on Python 3.12+", url: "https://github.com/Scenic-Foundation/Scenic/pull/501" },
  { repo: "unslothai/unsloth", number: 10264, title: "Studio: verify Hub credentials before cache-backed reads", url: "https://github.com/unslothai/unsloth/pull/10264" },
  { repo: "unslothai/unsloth", number: 9402, title: "fix(studio): refresh profile stats and mode-aware activity summary", url: "https://github.com/unslothai/unsloth/pull/9402" },
  { repo: "unslothai/unsloth", number: 10312, title: "fix(tokenizer): enable add_bos_token for Gemma 4 base models", url: "https://github.com/unslothai/unsloth/pull/10312" },
  { repo: "langgenius/dify", number: 41922, title: "fix(rag): preserve CSV cell text during knowledge import", url: "https://github.com/langgenius/dify/pull/41922" },
  { repo: "unslothai/unsloth", number: 10263, title: "Keep the LoRA GGUF and compressed-tensors converters off the operator's Hugging Face token", url: "https://github.com/unslothai/unsloth/pull/10263" },
  { repo: "langgenius/dify-official-plugins", number: 3822, title: "feat(tongyi): add qwen3.8-flash and qwen3.8-flash-next model support", url: "https://github.com/langgenius/dify-official-plugins/pull/3822" },
  { repo: "langgenius/dify", number: 41764, title: "fix: close unclosed think tags around agent tool calls", url: "https://github.com/langgenius/dify/pull/41764" },
  { repo: "langgenius/dify", number: 41762, title: "refactor(models): use sa.false()/sa.true() for boolean server defaults", url: "https://github.com/langgenius/dify/pull/41762" },
  { repo: "langgenius/dify", number: 41761, title: "fix(binding-files): keep UTF-8 text preview when max_bytes splits a character", url: "https://github.com/langgenius/dify/pull/41761" },
  { repo: "langgenius/dify-official-plugins", number: 3767, title: "fix(tongyi): accept temperature below 0.6 for qwen3.8-max", url: "https://github.com/langgenius/dify-official-plugins/pull/3767" },
  { repo: "langgenius/dify-official-plugins", number: 3769, title: "fix(cohere): expose custom and embed-v4.0 text embedding models", url: "https://github.com/langgenius/dify-official-plugins/pull/3769" },
  { repo: "unslothai/unsloth", number: 9980, title: "Fix llama.cpp Studio update failures on GitHub API rate limits (#9970)", url: "https://github.com/unslothai/unsloth/pull/9980" },
  { repo: "unslothai/unsloth", number: 9849, title: "Studio: keep a Downloads entry when the list is empty", url: "https://github.com/unslothai/unsloth/pull/9849" },
  { repo: "unslothai/unsloth", number: 10045, title: "Studio: resume HTTP after Xet stall without a transport-conflict banner", url: "https://github.com/unslothai/unsloth/pull/10045" },
  { repo: "unslothai/unsloth", number: 9905, title: "fix(studio): repair custom TTS endpoint test and playback", url: "https://github.com/unslothai/unsloth/pull/9905" },
  { repo: "unslothai/unsloth", number: 9871, title: "strip inherited claude provider routing from local agent launches", url: "https://github.com/unslothai/unsloth/pull/9871" },
  { repo: "unslothai/unsloth", number: 9870, title: "Fix Studio CPT overwriting LFM2 all-linear LoRA targets", url: "https://github.com/unslothai/unsloth/pull/9870" },
  { repo: "unslothai/unsloth", number: 9774, title: "Studio: add Chat settings to disable or ease GGUF auto-compaction", url: "https://github.com/unslothai/unsloth/pull/9774" },
  { repo: "unslothai/unsloth", number: 9770, title: "route thinking controls to ollama", url: "https://github.com/unslothai/unsloth/pull/9770" },
  { repo: "langgenius/dify-official-plugins", number: 3756, title: "fix(plugins): parse files when Dify already has an event loop", url: "https://github.com/langgenius/dify-official-plugins/pull/3756" },
  { repo: "infiniflow/ragflow", number: 18783, title: "fix(web): skip canvas autosave of empty nodes/edges", url: "https://github.com/infiniflow/ragflow/pull/18783" },
  { repo: "unslothai/unsloth", number: 9773, title: "Studio: honour forced tool_choice on local GGUF tool loops", url: "https://github.com/unslothai/unsloth/pull/9773" },
  { repo: "infiniflow/ragflow", number: 17668, title: "fix(web): surface dataset navigation tree load failures (closes #17301)", url: "https://github.com/infiniflow/ragflow/pull/17668" },
  { repo: "BerriAI/litellm", number: 36513, title: "fix(proxy): parse form-encoded video edit/extension bodies after auth", url: "https://github.com/BerriAI/litellm/pull/36513" },
  { repo: "unslothai/unsloth", number: 9149, title: "fix(studio): auto-enable --embedding for GGUFs missing pooling_type", url: "https://github.com/unslothai/unsloth/pull/9149" },
  { repo: "mastra-ai/mastra", number: 21187, title: "fix(core): preserve jsonSchema adapter after Zod v4 tool schema injection", url: "https://github.com/mastra-ai/mastra/pull/21187" },
  { repo: "unslothai/unsloth", number: 8389, title: "fix(studio): return 404 for mistyped GGUF model ids on /v1 API", url: "https://github.com/unslothai/unsloth/pull/8389" },
  { repo: "unslothai/unsloth", number: 8217, title: "Fix resume button missing after stop-and-save (#8150)", url: "https://github.com/unslothai/unsloth/pull/8217" },
  { repo: "langgenius/dify", number: 40176, title: "feat(api): cache remote recommended app template fetches", url: "https://github.com/langgenius/dify/pull/40176" },
  { repo: "unslothai/unsloth", number: 7976, title: "[Fix] Unsloth Studio: Strip ANSI escape codes from Studio tool output panes", url: "https://github.com/unslothai/unsloth/pull/7976" },
  { repo: "unslothai/unsloth", number: 7982, title: "Fix desktop image drops for chat attachments", url: "https://github.com/unslothai/unsloth/pull/7982" },
  { repo: "unslothai/unsloth", number: 7985, title: "Clamp Deep Research max_tokens to loaded context window", url: "https://github.com/unslothai/unsloth/pull/7985" },
  { repo: "mastra-ai/mastra", number: 19940, title: "fix(core): keep sequential allow tool results after auto-approved resume", url: "https://github.com/mastra-ai/mastra/pull/19940" },
  { repo: "langgenius/dify", number: 39761, title: "fix(web): only open slash variable picker when / is typed (#39755)", url: "https://github.com/langgenius/dify/pull/39761" },
  { repo: "BerriAI/litellm", number: 34092, title: "fix(proxy): register managed batch output files on terminal retrieve", url: "https://github.com/BerriAI/litellm/pull/34092" },
  { repo: "unslothai/unsloth", number: 7334, title: "fix(studio): neutralize chat-template control markup in client text (#7066)", url: "https://github.com/unslothai/unsloth/pull/7334" },
  { repo: "unslothai/unsloth", number: 7453, title: "fix(studio): refresh token count after model load (#7450)", url: "https://github.com/unslothai/unsloth/pull/7453" },
  { repo: "unslothai/unsloth", number: 7375, title: "Studio: restore cached models hidden by a dangling HF ref, and stop auto-load downloading after a failed load (#7374)", url: "https://github.com/unslothai/unsloth/pull/7375" },
  { repo: "langgenius/dify", number: 39708, title: "fix(api): delete custom models stored with legacy model_type values", url: "https://github.com/langgenius/dify/pull/39708" },
  { repo: "Mintplex-Labs/anything-llm", number: 6058, title: "feat(agents): add You.com as web search provider", url: "https://github.com/Mintplex-Labs/anything-llm/pull/6058" },
  { repo: "unslothai/unsloth", number: 7373, title: "Installer: opt-in Vulkan llama.cpp backend (and fallback when no AMD card is HIP-supported)", url: "https://github.com/unslothai/unsloth/pull/7373" },
  { repo: "unslothai/unsloth", number: 7482, title: "avoid Hub metadata probe when loading tokenizers with local_files_only", url: "https://github.com/unslothai/unsloth/pull/7482" },
  { repo: "unslothai/unsloth", number: 7415, title: "fix(studio): reject Vulkan diffusion gpu_ids before Phase 1 teardown", url: "https://github.com/unslothai/unsloth/pull/7415" },
  { repo: "unslothai/unsloth", number: 7351, title: "fix(studio): honor run settings on initial model load (#7346)", url: "https://github.com/unslothai/unsloth/pull/7351" },
  { repo: "unslothai/unsloth", number: 7352, title: "feat(studio): presets include load settings (#7347)", url: "https://github.com/unslothai/unsloth/pull/7352" },
  { repo: "unslothai/unsloth", number: 7349, title: "fix(studio/colab): restore blank Colab iframe embed (#7344)", url: "https://github.com/unslothai/unsloth/pull/7349" },
  { repo: "unslothai/unsloth", number: 7348, title: "feat(studio): expose full KV cache dtype list in model config UI", url: "https://github.com/unslothai/unsloth/pull/7348" },
  { repo: "unslothai/unsloth", number: 7332, title: "fix(studio): stop false MTP/vision capability reports", url: "https://github.com/unslothai/unsloth/pull/7332" },
  { repo: "unslothai/unsloth", number: 7324, title: "fix(install): show detected distro in sudo apt Accept prompt", url: "https://github.com/unslothai/unsloth/pull/7324" },
  { repo: "unslothai/unsloth", number: 7323, title: "fix(studio): resolve bare git on Windows sandbox PATH", url: "https://github.com/unslothai/unsloth/pull/7323" },
  { repo: "unslothai/unsloth", number: 7322, title: "fix(studio): opt-in source-build GPU smoke validation", url: "https://github.com/unslothai/unsloth/pull/7322" },
  { repo: "unslothai/unsloth", number: 7299, title: "fix: pin torchcodec for torch 2.10 and warn on ABI mismatch", url: "https://github.com/unslothai/unsloth/pull/7299" },
  { repo: "unslothai/unsloth", number: 7298, title: "fix(studio): persist connection model selections for remote clients", url: "https://github.com/unslothai/unsloth/pull/7298" },
  { repo: "unslothai/unsloth", number: 7297, title: "fix(studio): show chat sidebar menu on touch devices", url: "https://github.com/unslothai/unsloth/pull/7297" },
  { repo: "unslothai/unsloth", number: 7305, title: "fix(install): infer Strix gfx when ROCm runtime is absent", url: "https://github.com/unslothai/unsloth/pull/7305" },
  { repo: "unslothai/unsloth", number: 7300, title: "fix(install): route Strix to AMD gfx index on ROCm 7.14", url: "https://github.com/unslothai/unsloth/pull/7300" },
];

// --------------------------------------------------------------------------
// 3. PROJECTS PAGE MARIO CONSTANTS (project.js)
// --------------------------------------------------------------------------
const MARIO_RUNNING_GIF = "/assets/projects/images/mariorunning.gif";
const MARIO_IDLE_PNG = "/assets/projects/images/mario.png";
const MARIO_VOLUME_LEVEL = 0.3;

// --------------------------------------------------------------------------
// 4. CONTACT PAGE DUCK HUNT GAME CONSTANTS (contact.html / contact.js)
// --------------------------------------------------------------------------
const DUCKHUNT_BIRDS_NEEDED = 3;
const DUCKHUNT_TOTAL_BIRDS = 10;
const DUCKHUNT_VOLUME_LEVEL = 0.3;
const DUCKHUNT_BIRD_SPEED_MULTIPLIER = 1;

// Sound Effects Path definitions
const DUCKHUNT_SOUNDS = {
  wingFlap: '/assets/audio/contact/wingFlap20sec.mp3',
  shot: '/assets/audio/contact/shot.mp3',
  fall: '/assets/audio/contact/duckFalling.mp3',
  duckinit: '/assets/audio/contact/duckinit.mp3',
  dogLaughing: '/assets/audio/contact/dog-laughing.mp3',
  highScore: '/assets/audio/contact/high-score.mp3',
  pause: '/assets/audio/contact/pause.mp3'
};

// Character Image Path definitions
const DUCKHUNT_IMAGES = {
  defaultBird: '/assets/contact/images/flyduck.gif',
  shotBird: '/assets/contact/images/shotduck.png',
  deadBird: '/assets/contact/images/deadduck.gif',
  perfectDog: '/assets/contact/images/perfect_dog.gif',
  laughingDog: '/assets/contact/images/laughingdog.gif'
};
