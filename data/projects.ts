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
    subtitle: 'Behavioral experiment · Social perception · Experimental design',
    description:
      'A controlled behavioral study testing whether people estimate group prevalence differently in social scenes than in visually matched non-social scenes.',

    tags: [
      'Experimental design',
      'Behavioral research',
      'Stimulus generation',
      'Social perception',
      'Python',
      'JATOS',
    ],

    visual: 'matrix',

    codeSnippet:
      'stimulus_type = social | nonsocial\ncomposition = black_perceived / 64\nestimate_error = participant_estimate - true_percentage',

    question:
      'Does the social meaning of a scene influence how people estimate the prevalence of a minority group?',

    constraint:
      'A direct comparison between social and non-social perception requires controlling visual differences that could otherwise explain estimation bias. The experiment therefore pairs face grids with non-social circle grids that preserve the same composition, spatial arrangement, and stimulus-level luminance information.',

    approach:
      'I designed three experimental conditions—mixed, social-only, and non-social-only—using 8×8 grids at nine group compositions. Social stimuli are drawn from the Chicago Face Database, filtered using perceptual norming criteria and age-matched across Black-perceived and White-perceived groups. Each corresponding circle stimulus inherits the luminance of its source face, creating a visually analogous non-social control.',

    system:
      'CFD metadata → perceptual filtering → age matching → face-region extraction → luminance and area calibration → paired face/circle matrix generation → randomized JATOS experiment → participant prevalence estimate → condition-level analysis',

    result:
      'The pipeline produces 45 face grids and 45 matched circle grids across nine prevalence levels, with five stimulus versions per level. Participants complete one of three study conditions, enabling comparisons between social and non-social estimation while holding key low-level visual properties constant.',

    reflection:
      'The design isolates social content more carefully than a simple faces-versus-shapes comparison, but the non-social stimuli may still acquire social meaning from the task context. The pilot therefore includes a funnel debrief probing whether participants interpreted the circles as representing racial groups. Pilot data collection is currently underway.',
  },
  {
    slug: 'internal-face-representations',
    number: '02',
    title: 'Reconstructing internal face representations',
    subtitle: 'Computational cognitive science · Preference modeling · Computer vision',

    description:
      'A participant-specific face reconstruction pipeline that infers latent preferences from pairwise judgments and maps them back into facial geometry and texture.',

    tags: [
      'Bradley–Terry models',
      'Preference learning',
      'Computer vision',
      'MediaPipe',
      'Facial morphing',
      'Geometric alignment',
    ],

    visual: 'faces',

    codeSnippet:
      'utilities = fit_bradley_terry(pairwise_choices)\nweights = utilities_to_reconstruction_weights(utilities)\nprototype = reconstruct_face(weights, aligned_faces, landmarks)',

    question:
      'Can repeated pairwise face choices reveal a participant-specific latent facial representation?',

    constraint:
      'Each response only indicates a relative preference between two faces, so the target representation is never observed directly. The method must recover a stable latent preference structure from sparse pairwise judgments, then translate those scores into a geometrically coherent facial reconstruction.',

    approach:
      'I built an end-to-end pipeline that fits a participant-specific Bradley–Terry model to pairwise choices, converts latent utilities into reconstruction weights, extracts 478 facial landmarks with MediaPipe, aligns faces to a shared coordinate system, and reconstructs weighted facial shape and texture using a common Delaunay triangulation and piecewise-affine warping.',

    system:
      'Pairwise judgments → Bradley–Terry latent utilities → reconstruction weights → MediaPipe landmarks → similarity alignment → stable landmark selection → common Delaunay triangulation → piecewise-affine warping → weighted facial prototype',

    result:
      'The pipeline produces a participant-specific reconstructed face together with its weighted target landmark configuration, reconstruction weights, topology information, and triangle-level quality-control diagnostics. The statistical pipeline can also be validated on simulated participants with known latent utilities before using real experimental responses.',

    reflection:
      'The reconstruction should be interpreted as a model of the preference structure induced by the experiment, not as a direct readout of a participant’s mental image. Its validity depends on the stimulus set, pairwise-comparison design, model assumptions, and geometric reconstruction choices. Future work can test adaptive pair selection, out-of-sample preference prediction, and reconstruction stability across repeated sessions.',
  },
  {
    slug: 'modular-manifold-muon',
    number: '03',
    title: 'Modular Manifold MuOn',
    subtitle: 'Optimization research · Riemannian geometry · Deep learning',

    description:
      'Exploring Riemannian quasi-Newton methods as faster inner solvers for Manifold MuOn while preserving Stiefel-constrained neural network geometry.',

    tags: [
      'Riemannian optimization',
      'L-BFGS',
      'Stiefel manifold',
      'Deep learning',
      'PyTorch',
      'Optimization benchmarks',
    ],

    visual: 'optimization',

    codeSnippet:
      'grad_tangent = project_to_tangent(W, grad)\ndirection = riemannian_lbfgs(grad_tangent, history)\nW_next = retract(W, direction)',

    question:
      'Can a limited-memory Riemannian quasi-Newton solver reduce the computational cost of Manifold MuOn without losing the geometric structure imposed on neural-network weights?',

    constraint:
      'The optimizer must remain on the Stiefel manifold while updating matrix-valued parameters efficiently. A practical replacement for the original inner solver therefore needs to preserve tangent-space geometry, maintain valid curvature information, and remain stable across architectures and learning rates.',

    approach:
      'I implemented Riemannian L-BFGS for Stiefel-constrained parameters together with a globalized variant that uses cautious curvature updates to reject unstable history pairs. Euclidean gradients are projected into the tangent space, quasi-Newton directions are computed from limited-memory curvature information, and each step is retracted back onto the manifold.',

    system:
      'Euclidean gradient → tangent-space projection → Riemannian L-BFGS direction → cautious curvature update → retraction onto the Stiefel manifold → neural-network parameter update',

    result:
      'The framework supports direct comparisons between the original inner solver, Riemannian L-BFGS variants, and Euclidean or manifold-based baselines across MLP, CNN, and Vision Transformer experiments, with runtime, convergence, and learning-rate robustness as the main evaluation dimensions.',

    reflection:
      'Quasi-Newton methods can reduce repeated inner-optimization overhead, but their advantage depends on the quality and stability of curvature information on the manifold. The globalized variant therefore trades some aggressiveness for robustness by rejecting degenerate curvature updates. Further work can test scaling behavior on larger models and characterize when manifold constraints provide gains beyond their computational cost.',
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
