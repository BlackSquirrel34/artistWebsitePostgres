// Define the interface for your image object
export interface ImageMT {
  id: number
  name: string
  alt: string
  /*   width: number
  height: number */
  url: string
}

// Mock array of images
const images: ImageMT[] = [
  {
    id: 1,
    name: 'Example Image 1',
    alt: 'A description of example image 1',
    /*   width: 800,
    height: 600, */
    url: '/sequoia.jpg',
  },
  {
    id: 2,
    name: 'Example Image 2',
    alt: 'A description of example image 2',
    /*     width: 1024,
    height: 768, */
    url: '/color.jpg',
  },
  {
    id: 3,
    name: 'Example Image 3',
    alt: 'A description of example image 3',
    /*     width: 800,
    height: 600, */
    url: '/futuristic.jpg',
  },
  {
    id: 4,
    name: 'Example Image 4',
    alt: 'A description of example image 4',
    /*     width: 1024,
    height: 768, */
    url: '/mushroom.jpg',
  },
  {
    id: 5,
    name: 'Example Image 5',
    alt: 'A description of example image 5',
    /*     width: 800,
    height: 600, */
    url: '/coast.jpg',
  },
  {
    id: 6,
    name: 'Example Image 6',
    alt: 'A description of example image 6',
    /*     width: 1024,
    height: 768, */
    url: '/wood.jpg',
  },
  {
    id: 7,
    name: 'Example Image 1',
    alt: 'A description of example image 1',
    /*  width: 800,
    height: 600, */
    url: '/bulb.jpg',
  },
  {
    id: 8,
    name: 'Example Image 2',
    alt: 'A description of example image 2',
    /*     width: 1024,
    height: 768, */
    url: '/iceberg.jpg',
  },
  {
    id: 9,
    name: 'Example Image 3',
    alt: 'A description of example image 3',
    /*     width: 800,
    height: 600, */
    url: '/bonfire.jpg',
  },
  {
    id: 10,
    name: 'Example Image 4',
    alt: 'A description of example image 4',
    /*     width: 1024,
    height: 768, */
    url: '/jet.jpg',
  },
  {
    id: 11,
    name: 'Example Image 5',
    alt: 'A description of example image 5',
    /*     width: 800,
    height: 600, */
    url: '/desert.jpg',
  },
  {
    id: 12,
    name: 'Example Image 6',
    alt: 'A description of example image 6',
    /* width: 1024,
    height: 768, */
    url: '/serene.jpg',
  },
  {
    id: 13,
    name: 'Example Image 1',
    alt: 'A description of example image 1',
    /*  width: 800,
    height: 600, */
    url: '/jet.jpg',
  },
  {
    id: 14,
    name: 'Example Image 2',
    alt: 'A description of example image 2',
    /*     width: 1024,
    height: 768, */
    url: '/plant.jpg',
  },
  {
    id: 15,
    name: 'Example Image 3',
    alt: 'A description of example image 3',
    /*  width: 800,
    height: 600, */
    url: '/bonfire.jpg',
  },
  {
    id: 16,
    name: 'Example Image 4',
    alt: 'A description of example image 4',
    /*  width: 1024,
    height: 768, */
    url: '/mushroom.jpg',
  },
  {
    id: 17,
    name: 'Example Image 5',
    alt: 'A description of example image 5',
    /*  width: 800,
    height: 600, */
    url: '/ocean.jpg',
  },
  {
    id: 18,
    name: 'Example Image 6',
    alt: 'A description of example image 6',
    /* width: 1024,
    height: 768, */
    url: '/coast.jpg',
  },
  {
    id: 19,
    name: 'Example Image 1',
    alt: 'A description of example image 1',
    /*   width: 800,
    height: 600, */
    url: '/waves.jpg',
  },
  {
    id: 20,
    name: 'Example Image 2',
    alt: 'A description of example image 2',
    /*     width: 1024,
    height: 768, */
    url: '/iceberg.jpg',
  },
  {
    id: 21,
    name: 'Example Image 3',
    alt: 'A description of example image 3',
    /*   width: 800,
    height: 600, */
    url: '/forest.jpg',
  },
  {
    id: 22,
    name: 'Example Image 4',
    alt: 'A description of example image 4',
    /*     width: 1024,
    height: 768, */
    url: '/plant.jpg',
  },
  {
    id: 23,
    name: 'Example Image 5',
    alt: 'A description of example image 5',
    /*  width: 800,
    height: 600, */
    url: '/ocean.jpg',
  },
  {
    id: 24,
    name: 'Example Image 6',
    alt: 'A description of example image 6',
    /*     width: 1024,
    height: 768, */
    url: '/wood.jpg',
  },
]

// Example function to get all images
export function getImagesM(): ImageMT[] {
  return images
}

// Example function to get an image by filename
export function getImageByFilename(filename: string): ImageMT | undefined {
  return images.find((image) => image.url.endsWith(filename))
}

// Usage
console.log(getImagesM())
console.log(getImageByFilename('waves.jpg'))
