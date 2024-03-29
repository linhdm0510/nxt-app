import { createContext, useMemo, useState } from 'react';

export const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: (_value) => {
    // function setIsLoading
  },
});

// interface LoadingProviderProps {
//   children: ReactNode;
// }

/**
 * use in child-component of the provider:
 * const { isLoading, setIsLoading } = useContext(LoadingContext);
 * isLoading: boolean -> Flag to display loading
 * setIsLoading: function -> setIsLoading(false): hide loading, setIsLoading(true): show loading.
 */
export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const loadingContextValue = useMemo(
    () => ({
      isLoading,
      setIsLoading,
    }),
    [isLoading, setIsLoading]
  );

  return (
    <LoadingContext.Provider value={loadingContextValue}>
      {children}
    </LoadingContext.Provider>
  );
}
