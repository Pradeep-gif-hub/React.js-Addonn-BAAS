const conf = {
  appwriteUrl: String(import.meta.env.VITE_REACT_APP_APPWRITE_URL || "https://fra.cloud.appwrite.io/v1"),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID || "68ff885f00130136934f"),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID || "68ff89280014cb0c1c51"),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID || "article"),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID || "68ff9b5b000e401003ba"),
};

export default conf;
