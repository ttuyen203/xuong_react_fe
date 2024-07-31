// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface LoadingContextType {
//   isLoading: boolean;
//   setIsLoading: (isLoading: boolean) => void;
// }

// const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   return (
//     <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
//       {children}
//     </LoadingContext.Provider>
//   );
// };

// const useLoading = (): LoadingContextType => {
//   const context = useContext(LoadingContext);
//   if (!context) {
//     throw new Error("useLoading must be used within a LoadingProvider");
//   }
//   return context;
// };

// export { LoadingProvider, useLoading };
