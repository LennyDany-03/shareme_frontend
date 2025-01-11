import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '01hd8h5c', // Replace with your project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2025-01-09', // Use current date
  useCdn: false,
});
