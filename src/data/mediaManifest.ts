export interface MediaAsset {
  id: string;
  filename: string;
  localPath: string;
  posterPath: string;
  sourceUrl: string;
  creator: string;
  license: string;
  type: 'video' | 'image';
  sections: string[];
  description: string;
  isAvailableLocally: boolean;
}

export interface PixabayCollection {
  name: string;
  url: string;
  searchQuery: string;
  usageContext: string;
}

export const MEDIA_MANIFEST: {
  videos: Record<string, MediaAsset>;
  images: Record<string, MediaAsset>;
  pixabayFallbacks: PixabayCollection[];
} = {
  videos: {
    soldiersHelicopter: {
      id: 'pexels_soldiers_helicopter_insertion',
      filename: 'pexels_soldiers_helicopter_insertion.mp4',
      localPath: '/media/video/pexels_soldiers_helicopter_insertion.mp4',
      posterPath: '/media/posters/pexels_soldiers_helicopter_insertion_poster.jpg',
      sourceUrl: 'https://www.pexels.com/video/soldiers-helicopter-war-military-853720/',
      creator: 'Pexels Contributor',
      license: 'Pexels Free to Use License',
      type: 'video',
      sections: ['hero', 'problem', 'field'],
      description: 'Soldiers + helicopter tactical insertion in high-noise combat staging environment.',
      isAvailableLocally: true
    },
    soldierHelicopter: {
      id: 'pexels_soldier_inside_helicopter',
      filename: 'pexels_soldier_inside_helicopter.mp4',
      localPath: '/media/video/pexels_soldier_inside_helicopter.mp4',
      posterPath: '/media/posters/pexels_soldier_inside_helicopter_poster.jpg',
      sourceUrl: 'https://www.pexels.com/video/soldier-in-helicopter-12103315/',
      creator: 'Pexels Aviation Contributor',
      license: 'Pexels Free to Use License',
      type: 'video',
      sections: ['noisyEnvironment', 'aviation', 'communication'],
      description: 'Soldier seated inside rotary aircraft during high-vibration flight conditions.',
      isAvailableLocally: true
    },
    aircraftVehicles: {
      id: 'pexels_aircraft_land_vehicles',
      filename: 'pexels_aircraft_land_vehicles.mp4',
      localPath: '/media/video/pexels_aircraft_land_vehicles.mp4',
      posterPath: '/media/posters/pexels_aircraft_land_vehicles_poster.jpg',
      sourceUrl: 'https://www.pexels.com/video/aircraft-and-land-vehicles-ready-for-combat-1635382/',
      creator: 'Pexels Combat Contributor',
      license: 'Pexels Free to Use License',
      type: 'video',
      sections: ['problem', 'vehicleNoise', 'environment'],
      description: 'Aircraft and tactical land transport fleet ready for combat deployment.',
      isAvailableLocally: true
    },
    cockpitHelicopter: {
      id: 'pexels_military_helicopter_cockpit',
      filename: 'pexels_military_helicopter_cockpit.mp4',
      localPath: '/media/video/pexels_military_helicopter_cockpit.mp4',
      posterPath: '/media/posters/pexels_military_helicopter_cockpit_poster.jpg',
      sourceUrl: 'https://www.pexels.com/video/piloto-2-15727324/',
      creator: 'Pexels Flight Contributor',
      license: 'Pexels Free to Use License',
      type: 'video',
      sections: ['communication', 'headsetContext'],
      description: 'Military helicopter pilot and cockpit communication environment.',
      isAvailableLocally: true
    },
    tacticalCommunication: {
      id: 'pexels_tactical_communication',
      filename: 'pexels_military_helicopter_cockpit.mp4', // Local fallback mapped to high-fidelity cockpit/tactical communication
      localPath: '/media/video/pexels_military_helicopter_cockpit.mp4',
      posterPath: '/media/posters/pexels_tactical_communication_poster.jpg',
      sourceUrl: 'https://www.pexels.com/video/tactical-soldiers-in-strategic-meeting-29684329/',
      creator: 'Pexels Contributor',
      license: 'Pexels Free to Use License',
      type: 'video',
      sections: ['communication', 'speech', 'teamwork', 'final'],
      description: 'Tactical operators coordinating in strategic mission environment.',
      isAvailableLocally: true
    },
    helicopterEnvironment02: {
      id: 'pexels_helicopter_environment_02',
      filename: 'pexels_helicopter_environment_02.mp4',
      localPath: '/media/video/pexels_helicopter_environment_02.mp4',
      posterPath: '/media/posters/pexels_helicopter_environment_02_poster.jpg',
      sourceUrl: 'https://www.pexels.com/video/piloto-5-15727328/',
      creator: 'Pexels Rotorcraft Contributor',
      license: 'Pexels Free to Use License',
      type: 'video',
      sections: ['helicopterNoise', 'environment'],
      description: 'Rotorcraft maneuvers and environmental turbulence.',
      isAvailableLocally: true
    },
    peopleHelicopter: {
      id: 'pexels_people_in_helicopter',
      filename: 'pexels_soldier_inside_helicopter.mp4', // Local fallback mapped to high-fidelity interior helicopter
      localPath: '/media/video/pexels_soldier_inside_helicopter.mp4',
      posterPath: '/media/posters/pexels_people_in_helicopter_poster.jpg',
      sourceUrl: 'https://www.pexels.com/video/people-in-a-helicopter-11899842/',
      creator: 'Pexels Aviation Contributor',
      license: 'Pexels Free to Use License',
      type: 'video',
      sections: ['helicopter', 'communication', 'final'],
      description: 'Personnel in helicopter cabin wearing communication gear.',
      isAvailableLocally: true
    }
  },

  images: {
    soldierHeadsetCloseup: {
      id: 'pexels_soldier_headset_closeup',
      filename: 'pexels_soldier_headset_closeup.jpg',
      localPath: '/media/images/pexels_soldier_headset_closeup.jpg',
      posterPath: '/media/images/pexels_soldier_headset_closeup.jpg',
      sourceUrl: 'https://www.pexels.com/photo/face-of-soldier-in-hat-15118799/',
      creator: 'Pexels Tactical Photographer',
      license: 'Pexels Free to Use License',
      type: 'image',
      sections: ['heroSecondary', 'headset', 'referenceMic', 'final'],
      description: 'Soldier face profile wearing tactical protective headgear and headset.',
      isAvailableLocally: true
    },
    soldierHeadsetVehicle: {
      id: 'unsplash_soldier_headset_vehicle',
      filename: 'unsplash_soldier_headset_vehicle.jpg',
      localPath: '/media/images/unsplash_soldier_headset_vehicle.jpg',
      posterPath: '/media/images/unsplash_soldier_headset_vehicle.jpg',
      sourceUrl: 'https://unsplash.com/photos/soldier-wearing-headset-works-inside-a-vehicle-fnK_FSsULPo',
      creator: 'Navy Medicine',
      license: 'Unsplash License (Free to use)',
      type: 'image',
      sections: ['hero', 'vehicleNoise', 'headset', 'communication'],
      description: 'Operator wearing over-ear tactical communication headset inside transport vehicle.',
      isAvailableLocally: true
    },
    soldierRadio: {
      id: 'unsplash_soldier_radio',
      filename: 'unsplash_soldier_radio.jpg',
      localPath: '/media/images/unsplash_soldier_radio.jpg',
      posterPath: '/media/images/unsplash_soldier_radio.jpg',
      sourceUrl: 'https://unsplash.com/photos/soldier-in-camouflage-gear-with-helmet-and-radio-OfzVWcY7YyE',
      creator: 'Mikhail Mamaev',
      license: 'Unsplash License (Free to use)',
      type: 'image',
      sections: ['communication', 'radio', 'fieldContext'],
      description: 'Soldier in camouflage gear with helmet and tactical communications radio.',
      isAvailableLocally: true
    },
    tacticalSoldier: {
      id: 'unsplash_tactical_soldier',
      filename: 'unsplash_tactical_soldier.jpg',
      localPath: '/media/images/unsplash_tactical_soldier.jpg',
      posterPath: '/media/images/unsplash_tactical_soldier.jpg',
      sourceUrl: 'https://unsplash.com/photos/soldier-in-tactical-gear-holding-a-rifle-indoors-isd_Aw2_4K4',
      creator: 'Taiwangun',
      license: 'Unsplash License (Free to use)',
      type: 'image',
      sections: ['fieldContext', 'problem', 'final'],
      description: 'Soldier in complete tactical gear with communication system context.',
      isAvailableLocally: true
    }
  },

  pixabayFallbacks: [
    {
      name: 'Pixabay Military Soldier Collection',
      url: 'https://pixabay.com/videos/search/military%20soldier/',
      searchQuery: 'military soldier',
      usageContext: 'Field environment, tactical comms training fallback footage'
    },
    {
      name: 'Pixabay Indian Army Soldier Collection',
      url: 'https://pixabay.com/videos/search/indian%20army%20soldier/',
      searchQuery: 'indian army soldier',
      usageContext: 'Indian defence force field operations contextual fallback'
    },
    {
      name: 'Pixabay Military Aviation Collection',
      url: 'https://pixabay.com/videos/search/military%20helicopters/',
      searchQuery: 'military helicopter',
      usageContext: 'Helicopter flight, rotor acoustics, cockpit operations fallback'
    },
    {
      name: 'Pixabay Tactical Vehicle Collection',
      url: 'https://pixabay.com/videos/search/military/',
      searchQuery: 'army vehicle / convoy',
      usageContext: 'Armored personnel carrier, combat vehicle interior noise fallback'
    }
  ]
};
