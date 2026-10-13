export type Project = {
  slug: string
  number: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  visual: 'matrix' | 'faces' | 'evaluation' | 'music'
  codeSnippet: string
  question: string
  constraint: string
  approach: string
  system: string
  result: string
  reflection: string
}

export const projects: Project[] = [
  {
    slug: 'minority-overestimation',
    number: '01',
    title: 'Measuring minority overestimation',
    subtitle: 'Behavioral experiment · Social perception · Data analysis',
    description: 'A controlled visual estimation experiment investigating how people estimate the prevalence of racial groups in social and non-social visual scenes.',
    tags: ['Experimental design', 'Perception', 'Quantitative analysis'],
    visual: 'matrix',
    codeSnippet: 'estimate = participant_response / total_stimuli\ncondition = scene_type × group_prevalence',
    question: 'How do people estimate the prevalence of social groups when they encounter them in visual scenes?',
    constraint: 'Estimates can shift with scene context, visual density, and the presence of social interaction. A useful measure needs to separate these influences without turning perception into a single universal judgment.',
    approach: 'A controlled visual estimation task pairs carefully varied scenes with a proportion-estimation response. The design makes scene type and group prevalence legible as independent experimental conditions.',
    system: 'Scene composition → randomized trial presentation → participant estimate → condition-level analysis',
    result: 'The study produces participant-level estimates that can be compared across social and non-social contexts and across the represented group proportions.',
    reflection: 'The experiment makes a complex social judgment measurable, but visual stimuli can never represent the full contexts in which people form impressions. Future work can test more naturalistic scenes and broaden participant populations.',
  },
  {
    slug: 'internal-face-representations',
    number: '02',
    title: 'Reconstructing internal face representations',
    subtitle: 'Computational cognitive science · Preference modeling',
    description: 'Inferring participant-specific latent facial representations from pairwise choices using Bradley–Terry models and facial morphing.',
    tags: ['Bradley–Terry models', 'Preference learning', 'Facial morphing'],
    visual: 'faces',
    codeSnippet: 'scores = BradleyTerry().fit(pairwise_choices)\nprototype = morph_space.decode(scores)',
    question: 'Can a sequence of relative choices reveal a person-specific mental representation of a face?',
    constraint: 'Pairwise preferences are indirect and noisy: each choice reveals a comparison, not a complete target. The model must infer a stable latent preference from sparse observations.',
    approach: 'Pairwise judgments are modeled with a Bradley–Terry preference function. Estimated scores provide a principled ordering that can be mapped back into a face-morph space.',
    system: 'Face pairs → pairwise decisions → Bradley–Terry scores → reconstructed representation',
    result: 'The output is a participant-specific representation that summarizes preferences across the set of observed comparisons.',
    reflection: 'A latent reconstruction is a model of preference rather than a direct readout of cognition. More adaptive sampling and out-of-sample validation can clarify its stability.',
  },
  {
    slug: 'precision-health',
    number: '03',
    title: 'Machine learning for precision health',
    subtitle: 'Machine learning · Clinical data · Evaluation',
    description: 'Developing and evaluating machine learning models for biomedical and clinical prediction, including subgroup performance analysis.',
    tags: ['Predictive modeling', 'Clinical data', 'Model evaluation'],
    visual: 'evaluation',
    codeSnippet: 'model.fit(train_features, train_labels)\nreport = evaluate(model, held_out, by=subgroup)',
    question: 'How can predictive models support biomedical and clinical research while making their limitations visible?',
    constraint: 'Clinical datasets are heterogeneous, outcomes may be imbalanced, and aggregate performance can obscure consequential differences between subgroups.',
    approach: 'Build reproducible modeling workflows that define evaluation before optimization, compare candidate models, and report performance beyond a single summary score.',
    system: 'Cohort definition → preprocessing → model training → held-out evaluation → subgroup analysis',
    result: 'Evaluation outputs include discrimination curves, threshold-aware measures, and subgroup comparisons that help characterize where a model performs well or poorly.',
    reflection: 'Predictive performance is not clinical utility. Future work should connect model evaluation to external validation, calibration, and the realities of clinical decision-making.',
  },
  {
    slug: 'ufo-recordz',
    number: '04',
    title: 'UFO.RECORDZ',
    subtitle: 'Frontend engineering · Data pipelines · Music technology',
    description: 'A production website and automated data pipeline for an independent electronic music collective.',
    tags: ['React', 'TypeScript', 'Supabase', 'SoundCloud API'],
    visual: 'music',
    codeSnippet: 'release = soundcloud.fetch_latest(collective_id)\nawait supabase.from("releases").upsert(release)',
    question: 'How can an independent music collective present releases and artists through a distinctive, maintainable digital home?',
    constraint: 'Release information lives across changing sources and formats. The experience needs an editorial feel without making updates dependent on hand-editing every page.',
    approach: 'A React and TypeScript frontend is paired with an automated data pipeline that keeps release information organized and ready for presentation.',
    system: 'SoundCloud API → scheduled data pipeline → Supabase → React + TypeScript interface',
    result: 'A production-facing site that brings the collective’s releases into one coherent listening and discovery experience.',
    reflection: 'The project connects visual design decisions to practical data maintenance. Further work can improve editorial tooling and explore richer listening and archive experiences.',
  },
]

export const getProject = (slug: string) => projects.find((project) => project.slug === slug)

export const projectSections = [
  { key: 'question', title: 'Question', prompt: 'What are we trying to understand?' },
  { key: 'constraint', title: 'Constraint', prompt: 'Why is this problem difficult?' },
  { key: 'approach', title: 'Approach', prompt: 'How was the problem modeled or engineered?' },
  { key: 'system', title: 'System', prompt: 'Architecture, pipeline or methodology.' },
  { key: 'result', title: 'Result', prompt: 'Metrics, visualizations and outputs.' },
  { key: 'reflection', title: 'Reflection', prompt: 'Limitations, lessons and next steps.' },
] as const
