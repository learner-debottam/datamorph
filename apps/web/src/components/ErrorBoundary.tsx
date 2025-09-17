"use client";

import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col min-h-screen">
          <h1 className="text-6xl text-red-600 font-bold text-center mt-32">Oops!</h1>
          <p className="text-center mt-4 text-lg">Something went wrong. Please refresh the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
