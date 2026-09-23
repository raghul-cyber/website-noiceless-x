/**
 * NOISELESS-X6 RESEARCH DATASET CORPUS
 * 118 Audio Datasets & Research Corpora for Military/Defence Noise Classification,
 * Speech Protection, Environmental Robustness, and Acoustic-Path Modeling.
 *
 * Source: NOISELESS-X6 Master Audio Research Specification
 */

export interface DatasetItem {
  id: number;
  name: string;
  category: DatasetCategory;
  use: string;
  url: string;
  domain: string;
  isRepository: boolean;
  priority?: boolean;
}

export type DatasetCategory =
  | 'ALL'
  | 'MILITARY / DEFENCE'
  | 'ENVIRONMENTAL NOISE'
  | 'SOUND EVENTS'
  | 'MACHINERY / INDUSTRIAL'
  | 'SPEECH ENHANCEMENT'
  | 'NOISY SPEECH'
  | 'CLEAN SPEECH'
  | 'ACOUSTIC / RIR'
  | 'DCASE / BENCHMARKS'
  | 'GENERAL AUDIO';

export const DATASET_CATEGORIES: DatasetCategory[] = [
  'ALL',
  'MILITARY / DEFENCE',
  'ENVIRONMENTAL NOISE',
  'SOUND EVENTS',
  'MACHINERY / INDUSTRIAL',
  'SPEECH ENHANCEMENT',
  'NOISY SPEECH',
  'CLEAN SPEECH',
  'ACOUSTIC / RIR',
  'DCASE / BENCHMARKS',
  'GENERAL AUDIO'
];

export const DATASETS_LIST: DatasetItem[] = [
  {
    "id": 1,
    "name": "Military Audio Dataset (MAD)",
    "category": "MILITARY / DEFENCE",
    "use": "Military audio / defence noise",
    "url": "https://github.com/kaen2891/military_audio_dataset",
    "domain": "github.com",
    "isRepository": true,
    "priority": true
  },
  {
    "id": 2,
    "name": "Reduced Military Audio Dataset",
    "category": "MILITARY / DEFENCE",
    "use": "TinyML military audio",
    "url": "https://www.kaggle.com/datasets/wimccall/reduced-mad-dataset-military-audio-dataset",
    "domain": "kaggle.com",
    "isRepository": true,
    "priority": true
  },
  {
    "id": 3,
    "name": "AudioSet",
    "category": "SOUND EVENTS",
    "use": "Large-scale sound events",
    "url": "https://research.google.com/audioset/",
    "domain": "research.google.com",
    "isRepository": false,
    "priority": true
  },
  {
    "id": 4,
    "name": "FSD50K",
    "category": "SOUND EVENTS",
    "use": "Environmental sound events",
    "url": "https://fsannotator.upf.edu/fsd/release/FSD50K/",
    "domain": "fsannotator.upf.edu",
    "isRepository": false,
    "priority": true
  },
  {
    "id": 5,
    "name": "ESC-50",
    "category": "ENVIRONMENTAL NOISE",
    "use": "Environmental sound classification",
    "url": "https://github.com/karolpiczak/ESC-50",
    "domain": "github.com",
    "isRepository": true,
    "priority": true
  },
  {
    "id": 6,
    "name": "UrbanSound8K",
    "category": "ENVIRONMENTAL NOISE",
    "use": "Urban/environmental noise",
    "url": "https://urbansounddataset.weebly.com/urbansound8k.html",
    "domain": "urbansounddataset.weebly.com",
    "isRepository": false,
    "priority": true
  },
  {
    "id": 7,
    "name": "VGGSound",
    "category": "SOUND EVENTS",
    "use": "Large-scale real-world sounds",
    "url": "https://github.com/hche11/VGGSound",
    "domain": "github.com",
    "isRepository": true,
    "priority": true
  },
  {
    "id": 8,
    "name": "DEMAND",
    "category": "ENVIRONMENTAL NOISE",
    "use": "Real environmental noise",
    "url": "https://zenodo.org/record/1227121",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": true
  },
  {
    "id": 9,
    "name": "DNS Challenge / DNS5",
    "category": "SPEECH ENHANCEMENT",
    "use": "Speech enhancement, noise, RIR",
    "url": "https://github.com/microsoft/DNS-Challenge",
    "domain": "github.com",
    "isRepository": true,
    "priority": true
  },
  {
    "id": 10,
    "name": "VoiceBank + DEMAND",
    "category": "NOISY SPEECH",
    "use": "Noisy speech enhancement",
    "url": "https://datashare.ed.ac.uk/handle/10283/2791",
    "domain": "datashare.ed.ac.uk",
    "isRepository": false,
    "priority": true
  },
  {
    "id": 11,
    "name": "MUSAN",
    "category": "GENERAL AUDIO",
    "use": "Speech, music and noise",
    "url": "https://www.openslr.org/17/",
    "domain": "openslr.org",
    "isRepository": false,
    "priority": true
  },
  {
    "id": 12,
    "name": "WHAM!",
    "category": "NOISY SPEECH",
    "use": "Speech + environmental noise",
    "url": "https://github.com/mpariente/wham",
    "domain": "github.com",
    "isRepository": true,
    "priority": true
  },
  {
    "id": 13,
    "name": "WHAMR!",
    "category": "NOISY SPEECH",
    "use": "Speech + noise + reverberation",
    "url": "https://github.com/whamr",
    "domain": "github.com",
    "isRepository": true,
    "priority": true
  },
  {
    "id": 14,
    "name": "FUSS",
    "category": "SPEECH ENHANCEMENT",
    "use": "Universal sound separation",
    "url": "https://zenodo.org/record/3694791",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 15,
    "name": "DESED",
    "category": "SOUND EVENTS",
    "use": "Domestic sound event detection",
    "url": "https://github.com/turpaultn/DESED",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 16,
    "name": "SINS",
    "category": "ENVIRONMENTAL NOISE",
    "use": "Sound Inference from Sensors / indoor sound",
    "url": "https://zenodo.org/record/2538251",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 17,
    "name": "SONYC-UST",
    "category": "ENVIRONMENTAL NOISE",
    "use": "Urban sound tagging",
    "url": "https://zenodo.org/record/2590742",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 18,
    "name": "Urban-SED",
    "category": "ENVIRONMENTAL NOISE",
    "use": "Urban sound event detection",
    "url": "https://github.com/4d1m/Urban-SED",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 19,
    "name": "MIMII",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Industrial machine sounds",
    "url": "https://zenodo.org/record/3384388",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": true
  },
  {
    "id": 20,
    "name": "ToyADMOS",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Machine anomaly sounds",
    "url": "https://github.com/YumaKoizumi/ToyADMOS-dataset",
    "domain": "github.com",
    "isRepository": true,
    "priority": true
  },
  {
    "id": 21,
    "name": "MIMII DUE",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Machine sounds under domain shift",
    "url": "https://zenodo.org/record/4748206",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 22,
    "name": "ToyADMOS2",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Machine anomaly/domain shift",
    "url": "https://github.com/nttcslab/ToyADMOS2-dataset",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 23,
    "name": "CHiME-1",
    "category": "NOISY SPEECH",
    "use": "Noisy speech",
    "url": "https://www.chimechallenge.org/challenges/chime1",
    "domain": "chimechallenge.org",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 24,
    "name": "CHiME-2",
    "category": "NOISY SPEECH",
    "use": "Noisy speech",
    "url": "https://www.chimechallenge.org/challenges/chime2",
    "domain": "chimechallenge.org",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 25,
    "name": "CHiME-3",
    "category": "NOISY SPEECH",
    "use": "Real/simulated noisy speech",
    "url": "https://www.chimechallenge.org/challenges/chime3",
    "domain": "chimechallenge.org",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 26,
    "name": "CHiME-4",
    "category": "NOISY SPEECH",
    "use": "Noisy speech in real environments",
    "url": "https://www.chimechallenge.org/challenges/chime4",
    "domain": "chimechallenge.org",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 27,
    "name": "CHiME-5",
    "category": "NOISY SPEECH",
    "use": "Real-world conversational speech",
    "url": "https://www.chimechallenge.org/challenges/chime5",
    "domain": "chimechallenge.org",
    "isRepository": false,
    "priority": true
  },
  {
    "id": 28,
    "name": "LibriMix",
    "category": "SPEECH ENHANCEMENT",
    "use": "Speech mixture generation",
    "url": "https://github.com/JorisCos/LibriMix",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 29,
    "name": "Libri2Mix",
    "category": "CLEAN SPEECH",
    "use": "Two-speaker mixtures",
    "url": "https://github.com/JorisCos/LibriMix",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 30,
    "name": "Libri3Mix",
    "category": "CLEAN SPEECH",
    "use": "Three-speaker mixtures",
    "url": "https://github.com/JorisCos/LibriMix",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 31,
    "name": "LibriCSS",
    "category": "SPEECH ENHANCEMENT",
    "use": "Continuous speech separation",
    "url": "https://github.com/chenzhuoyu/LibriCSS",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 32,
    "name": "REVERB Challenge",
    "category": "ACOUSTIC / RIR",
    "use": "Reverberant speech",
    "url": "https://reverb2014.audiolabs-erlangen.de/",
    "domain": "reverb2014.audiolabs-erlangen.de",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 33,
    "name": "TUT Sound Events 2016",
    "category": "SOUND EVENTS",
    "use": "Sound event detection",
    "url": "https://zenodo.org/record/45739",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 34,
    "name": "TUT Sound Events 2017",
    "category": "SOUND EVENTS",
    "use": "Sound event detection",
    "url": "https://zenodo.org/record/400515",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 35,
    "name": "TUT Urban Acoustic Scenes 2018",
    "category": "ENVIRONMENTAL NOISE",
    "use": "Acoustic scene classification",
    "url": "https://zenodo.org/record/1221518",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 36,
    "name": "TAU Urban Acoustic Scenes 2019",
    "category": "ENVIRONMENTAL NOISE",
    "use": "Acoustic scene classification",
    "url": "https://zenodo.org/record/2589280",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 37,
    "name": "TAU Urban Acoustic Scenes 2020 Mobile",
    "category": "ENVIRONMENTAL NOISE",
    "use": "Mobile acoustic scenes",
    "url": "https://zenodo.org/record/3678171",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 38,
    "name": "TAU Urban Acoustic Scenes 2021 Mobile",
    "category": "ENVIRONMENTAL NOISE",
    "use": "Mobile acoustic scenes",
    "url": "https://zenodo.org/record/4474820",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 39,
    "name": "TAU Urban Acoustic Scenes 2022 Mobile",
    "category": "ENVIRONMENTAL NOISE",
    "use": "Mobile acoustic scenes",
    "url": "https://zenodo.org/record/6337421",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 40,
    "name": "TAU Urban Acoustic Scenes 2023 Mobile",
    "category": "ENVIRONMENTAL NOISE",
    "use": "Mobile acoustic scenes",
    "url": "https://zenodo.org/record/7655152",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 41,
    "name": "CochlScene",
    "category": "ENVIRONMENTAL NOISE",
    "use": "Acoustic scene classification",
    "url": "https://www.cochl.ai/",
    "domain": "cochl.ai",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 42,
    "name": "MACS",
    "category": "ENVIRONMENTAL NOISE",
    "use": "Multichannel acoustic scene data",
    "url": "https://zenodo.org/record/1094791",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 43,
    "name": "AudioCaps",
    "category": "SOUND EVENTS",
    "use": "Audio-captioned real-world audio",
    "url": "https://github.com/cdjkim/audiocaps",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 44,
    "name": "Clotho",
    "category": "SOUND EVENTS",
    "use": "Audio captioning / environmental sounds",
    "url": "https://zenodo.org/record/3490684",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 45,
    "name": "WavCaps",
    "category": "SOUND EVENTS",
    "use": "Large weakly-labelled audio corpus",
    "url": "https://github.com/XinhaoMei/WavCaps",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 46,
    "name": "Freesound Dataset",
    "category": "GENERAL AUDIO",
    "use": "General environmental sounds",
    "url": "https://freesound.org/",
    "domain": "freesound.org",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 47,
    "name": "BBC Sound Effects",
    "category": "GENERAL AUDIO",
    "use": "Sound effects library",
    "url": "https://sound-effects.bbcrewind.co.uk/",
    "domain": "sound-effects.bbcrewind.co.uk",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 48,
    "name": "SoundBible",
    "category": "GENERAL AUDIO",
    "use": "Sound effects",
    "url": "https://soundbible.com/",
    "domain": "soundbible.com",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 49,
    "name": "NIGENS General Sound Events Database",
    "category": "SOUND EVENTS",
    "use": "Sound event detection",
    "url": "https://zenodo.org/record/4013195",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 50,
    "name": "DCASE datasets",
    "category": "DCASE / BENCHMARKS",
    "use": "Sound event / scene benchmarks",
    "url": "https://dcase.community/challenge/datasets",
    "domain": "dcase.community",
    "isRepository": false,
    "priority": true
  },
  {
    "id": 51,
    "name": "DCASE 2020 Task 2",
    "category": "DCASE / BENCHMARKS",
    "use": "Anomalous sound detection",
    "url": "https://dcase.community/challenge2020/task-unsupervised-detection-of-anomalous-sounds",
    "domain": "dcase.community",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 52,
    "name": "DCASE 2021 Task 2",
    "category": "DCASE / BENCHMARKS",
    "use": "Anomalous sound detection",
    "url": "https://dcase.community/challenge2021/task-unsupervised-detection-of-anomalous-sounds",
    "domain": "dcase.community",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 53,
    "name": "DCASE 2022 Task 2",
    "category": "DCASE / BENCHMARKS",
    "use": "Anomalous sound detection",
    "url": "https://dcase.community/challenge2022/task-unsupervised-detection-of-anomalous-sounds",
    "domain": "dcase.community",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 54,
    "name": "DCASE 2023 Task 2",
    "category": "DCASE / BENCHMARKS",
    "use": "Anomalous sound detection",
    "url": "https://dcase.community/challenge2023/task-first-shot-unsupervised-anomalous-sound-detection-for-machine-condition-monitoring",
    "domain": "dcase.community",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 55,
    "name": "DCASE 2024 Task 2",
    "category": "DCASE / BENCHMARKS",
    "use": "Anomalous sound detection",
    "url": "https://dcase.community/challenge2024/task-first-shot-unsupervised-anomalous-sound-detection-for-machine-condition-monitoring",
    "domain": "dcase.community",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 56,
    "name": "DCASE 2025 Task 2",
    "category": "DCASE / BENCHMARKS",
    "use": "Anomalous sound detection",
    "url": "https://dcase.community/challenge2025/task-first-shot-unsupervised-anomalous-sound-detection-for-machine-condition-monitoring",
    "domain": "dcase.community",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 57,
    "name": "DCASE 2026 Task 2",
    "category": "DCASE / BENCHMARKS",
    "use": "Noise-aware anomalous sound detection",
    "url": "https://dcase.community/challenge2026/task-first-shot-unsupervised-anomalous-sound-detection-for-machine-condition-monitoring",
    "domain": "dcase.community",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 58,
    "name": "MIMII ToyCar",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Machine anomaly",
    "url": "https://zenodo.org/record/3384388",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 59,
    "name": "MIMII ToyTrain",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Machine anomaly",
    "url": "https://zenodo.org/record/3384388",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 60,
    "name": "MIMII Fan",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Machine anomaly",
    "url": "https://zenodo.org/record/3384388",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 61,
    "name": "MIMII Gearbox",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Machine anomaly",
    "url": "https://zenodo.org/record/3384388",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 62,
    "name": "MIMII Bearing",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Machine anomaly",
    "url": "https://zenodo.org/record/3384388",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 63,
    "name": "MIMII Slide Rail",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Machine anomaly",
    "url": "https://zenodo.org/record/3384388",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 64,
    "name": "MIMII Valve",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Machine anomaly",
    "url": "https://zenodo.org/record/3384388",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 65,
    "name": "ToyADMOS Car",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Machine anomaly",
    "url": "https://zenodo.org/record/3351307",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 66,
    "name": "ToyADMOS Conveyor",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Machine anomaly",
    "url": "https://zenodo.org/record/3351307",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 67,
    "name": "ToyADMOS Fan",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Machine anomaly",
    "url": "https://zenodo.org/record/3351307",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 68,
    "name": "ToyADMOS Pump",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Machine anomaly",
    "url": "https://zenodo.org/record/3351307",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 69,
    "name": "ToyADMOS Machine",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Machine anomaly",
    "url": "https://zenodo.org/record/3351307",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 70,
    "name": "ToyADMOS2",
    "category": "MACHINERY / INDUSTRIAL",
    "use": "Machine anomaly under domain shift",
    "url": "https://zenodo.org/record/5770113",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 71,
    "name": "DNS Challenge 2020",
    "category": "SPEECH ENHANCEMENT",
    "use": "Deep noise suppression",
    "url": "https://github.com/microsoft/DNS-Challenge",
    "domain": "github.com",
    "isRepository": true,
    "priority": true
  },
  {
    "id": 72,
    "name": "DNS Challenge 2021",
    "category": "SPEECH ENHANCEMENT",
    "use": "Deep noise suppression",
    "url": "https://github.com/microsoft/DNS-Challenge",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 73,
    "name": "DNS Challenge 2022",
    "category": "SPEECH ENHANCEMENT",
    "use": "Deep noise suppression",
    "url": "https://github.com/microsoft/DNS-Challenge",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 74,
    "name": "DNS Challenge 2023 / DNS5",
    "category": "SPEECH ENHANCEMENT",
    "use": "Deep noise suppression",
    "url": "https://github.com/microsoft/DNS-Challenge",
    "domain": "github.com",
    "isRepository": true,
    "priority": true
  },
  {
    "id": 75,
    "name": "DNS Headset Track",
    "category": "SPEECH ENHANCEMENT",
    "use": "Headset speech enhancement",
    "url": "https://github.com/microsoft/DNS-Challenge",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 76,
    "name": "DNS Speakerphone Track",
    "category": "SPEECH ENHANCEMENT",
    "use": "Speakerphone speech enhancement",
    "url": "https://github.com/microsoft/DNS-Challenge",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 77,
    "name": "Personalized DNS",
    "category": "SPEECH ENHANCEMENT",
    "use": "Personalized speech enhancement",
    "url": "https://github.com/microsoft/Personalized-DNS",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 78,
    "name": "VoiceBank + DEMAND",
    "category": "NOISY SPEECH",
    "use": "Speech enhancement",
    "url": "https://datashare.ed.ac.uk/handle/10283/2791",
    "domain": "datashare.ed.ac.uk",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 79,
    "name": "WHAM!",
    "category": "NOISY SPEECH",
    "use": "Speech + noise",
    "url": "https://github.com/mpariente/wham",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 80,
    "name": "WHAMR!",
    "category": "NOISY SPEECH",
    "use": "Speech + noise + RIR",
    "url": "https://github.com/whamr",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 81,
    "name": "CHiME-1",
    "category": "NOISY SPEECH",
    "use": "Noisy speech",
    "url": "https://www.chimechallenge.org/challenges/chime1",
    "domain": "chimechallenge.org",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 82,
    "name": "CHiME-2",
    "category": "NOISY SPEECH",
    "use": "Noisy speech",
    "url": "https://www.chimechallenge.org/challenges/chime2",
    "domain": "chimechallenge.org",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 83,
    "name": "CHiME-3",
    "category": "NOISY SPEECH",
    "use": "Noisy speech",
    "url": "https://www.chimechallenge.org/challenges/chime3",
    "domain": "chimechallenge.org",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 84,
    "name": "CHiME-4",
    "category": "NOISY SPEECH",
    "use": "Noisy speech",
    "url": "https://www.chimechallenge.org/challenges/chime4",
    "domain": "chimechallenge.org",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 85,
    "name": "CHiME-5",
    "category": "NOISY SPEECH",
    "use": "Noisy conversational speech",
    "url": "https://www.chimechallenge.org/challenges/chime5",
    "domain": "chimechallenge.org",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 86,
    "name": "REVERB",
    "category": "ACOUSTIC / RIR",
    "use": "Reverberant speech",
    "url": "https://reverb2014.audiolabs-erlangen.de/",
    "domain": "reverb2014.audiolabs-erlangen.de",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 87,
    "name": "DIRHA",
    "category": "NOISY SPEECH",
    "use": "Domestic indoor speech/audio",
    "url": "https://dirha.fbk.eu/",
    "domain": "dirha.fbk.eu",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 88,
    "name": "SMS-WSJ",
    "category": "SPEECH ENHANCEMENT",
    "use": "Spatialized multi-speaker speech",
    "url": "https://arxiv.org/abs/1910.01536",
    "domain": "arxiv.org",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 89,
    "name": "Clarity Challenge",
    "category": "SPEECH ENHANCEMENT",
    "use": "Hearing-aid speech enhancement",
    "url": "https://claritychallenge.org/",
    "domain": "claritychallenge.org",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 90,
    "name": "ConferencingSpeech",
    "category": "SPEECH ENHANCEMENT",
    "use": "Meeting/conferencing speech",
    "url": "https://www.microsoft.com/en-us/research/project/conferencing-speech/",
    "domain": "microsoft.com",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 91,
    "name": "LibriSpeech",
    "category": "CLEAN SPEECH",
    "use": "Clean speech",
    "url": "https://www.openslr.org/12/",
    "domain": "openslr.org",
    "isRepository": false,
    "priority": true
  },
  {
    "id": 92,
    "name": "LibriTTS",
    "category": "CLEAN SPEECH",
    "use": "Text-to-speech speech corpus",
    "url": "https://www.openslr.org/60/",
    "domain": "openslr.org",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 93,
    "name": "VCTK",
    "category": "CLEAN SPEECH",
    "use": "Multi-speaker speech",
    "url": "https://datashare.ed.ac.uk/handle/10283/3443",
    "domain": "datashare.ed.ac.uk",
    "isRepository": false,
    "priority": true
  },
  {
    "id": 94,
    "name": "Mozilla Common Voice",
    "category": "CLEAN SPEECH",
    "use": "Multilingual speech",
    "url": "https://commonvoice.mozilla.org/datasets",
    "domain": "commonvoice.mozilla.org",
    "isRepository": false,
    "priority": true
  },
  {
    "id": 95,
    "name": "Multilingual LibriSpeech (MLS)",
    "category": "CLEAN SPEECH",
    "use": "Multilingual speech",
    "url": "https://www.openslr.org/94/",
    "domain": "openslr.org",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 96,
    "name": "EARS",
    "category": "CLEAN SPEECH",
    "use": "Speech corpus",
    "url": "https://github.com/facebookresearch/ears_dataset",
    "domain": "github.com",
    "isRepository": true,
    "priority": true
  },
  {
    "id": 97,
    "name": "TIMIT",
    "category": "CLEAN SPEECH",
    "use": "Speech corpus",
    "url": "https://catalog.ldc.upenn.edu/LDC93S1",
    "domain": "catalog.ldc.upenn.edu",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 98,
    "name": "VocalSet",
    "category": "CLEAN SPEECH",
    "use": "Singing/voice corpus",
    "url": "https://vocalset.github.io/",
    "domain": "vocalset.github.io",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 99,
    "name": "PTDB-TUG",
    "category": "CLEAN SPEECH",
    "use": "Pitch tracking speech database",
    "url": "https://www.spsc.tugraz.at/databases-and-tools/ptdb-tug-pitch-tracking-database-from-graz-university-of-technology.html",
    "domain": "spsc.tugraz.at",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 100,
    "name": "Edinburgh 56-Speaker Dataset",
    "category": "CLEAN SPEECH",
    "use": "Speech corpus",
    "url": "https://datashare.ed.ac.uk/handle/10283/2791",
    "domain": "datashare.ed.ac.uk",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 101,
    "name": "DAPS",
    "category": "CLEAN SPEECH",
    "use": "Speech recording corpus",
    "url": "https://datashare.ed.ac.uk/handle/10283/2680",
    "domain": "datashare.ed.ac.uk",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 102,
    "name": "Speech Commands",
    "category": "CLEAN SPEECH",
    "use": "Keyword/speech recognition",
    "url": "https://www.tensorflow.org/datasets/catalog/speech_commands",
    "domain": "tensorflow.org",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 103,
    "name": "IEMOCAP",
    "category": "CLEAN SPEECH",
    "use": "Emotional speech",
    "url": "https://sail.usc.edu/iemocap/",
    "domain": "sail.usc.edu",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 104,
    "name": "MSP-Podcast",
    "category": "CLEAN SPEECH",
    "use": "Emotional speech",
    "url": "https://www.lab-msp.com/MSP/MSP-Podcast.html",
    "domain": "lab-msp.com",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 105,
    "name": "MELD",
    "category": "CLEAN SPEECH",
    "use": "Multimodal emotion/speech",
    "url": "https://github.com/declare-lab/MELD",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 106,
    "name": "AVA-ActiveSpeaker",
    "category": "CLEAN SPEECH",
    "use": "Active speaker detection",
    "url": "https://research.google.com/ava/",
    "domain": "research.google.com",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 107,
    "name": "VOiCES",
    "category": "NOISY SPEECH",
    "use": "Real-world speech/audio",
    "url": "https://voices18.github.io/",
    "domain": "voices18.github.io",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 108,
    "name": "BUT ReverbDB",
    "category": "ACOUSTIC / RIR",
    "use": "Room impulse responses",
    "url": "https://speech.fit.vutbr.cz/software/but-reverbdb/",
    "domain": "speech.fit.vutbr.cz",
    "isRepository": false,
    "priority": true
  },
  {
    "id": 109,
    "name": "BRAS",
    "category": "ACOUSTIC / RIR",
    "use": "Room acoustics / RIR",
    "url": "https://zenodo.org/record/1255935",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 110,
    "name": "MYRiAD",
    "category": "ACOUSTIC / RIR",
    "use": "Room impulse response / acoustic data",
    "url": "https://zenodo.org/record/4030938",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 111,
    "name": "SLR28",
    "category": "ACOUSTIC / RIR",
    "use": "Room impulse responses used by DNS",
    "url": "https://openslr.org/28/",
    "domain": "openslr.org",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 112,
    "name": "VoiceHome",
    "category": "NOISY SPEECH",
    "use": "Home environment speech/audio",
    "url": "https://voicehome2.citi-lab.fr/",
    "domain": "voicehome2.citi-lab.fr",
    "isRepository": false,
    "priority": false
  },
  {
    "id": 113,
    "name": "TAU-SRIR",
    "category": "ACOUSTIC / RIR",
    "use": "Spatial room impulse responses",
    "url": "https://zenodo.org/record/5711712",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": true
  },
  {
    "id": 114,
    "name": "6DOF-SRIR",
    "category": "ACOUSTIC / RIR",
    "use": "6-DoF spatial room impulse responses",
    "url": "https://zenodo.org/record/6542734",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": true
  },
  {
    "id": 115,
    "name": "METU RIR",
    "category": "ACOUSTIC / RIR",
    "use": "Room impulse responses",
    "url": "https://www.ee.metu.edu.tr/~roomacoustics/",
    "domain": "ee.metu.edu.tr",
    "isRepository": false,
    "priority": true
  },
  {
    "id": 116,
    "name": "SurrRoom",
    "category": "ACOUSTIC / RIR",
    "use": "Room impulse response dataset",
    "url": "https://zenodo.org/record/3630471",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 117,
    "name": "Treble10-RIR",
    "category": "ACOUSTIC / RIR",
    "use": "Room impulse responses",
    "url": "https://zenodo.org/record/3748306",
    "domain": "zenodo.org",
    "isRepository": true,
    "priority": false
  },
  {
    "id": 118,
    "name": "AudioSetCaps",
    "category": "SOUND EVENTS",
    "use": "Large audio-caption metadata corpus",
    "url": "https://github.com/JishengBai/AudioSetCaps",
    "domain": "github.com",
    "isRepository": true,
    "priority": false
  }
];

export const HIGH_PRIORITY_DATASETS = DATASETS_LIST.filter(d => d.priority);
