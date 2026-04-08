import { useState, useCallback } from 'react';

interface LeadData {
  email: string;
  newsletter: boolean;
  capturedAt: string;
}

export function useLeadCapture() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCaptured, setIsCaptured] = useState(() => {
    return !!localStorage.getItem('equiadvisor_lead');
  });

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const submitLead = useCallback((email: string, newsletter: boolean) => {
    const data: LeadData = { email, newsletter, capturedAt: new Date().toISOString() };
    localStorage.setItem('equiadvisor_lead', JSON.stringify(data));
    setIsCaptured(true);
    setIsModalOpen(false);
  }, []);

  const skipCapture = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return { isModalOpen, isCaptured, openModal, closeModal, submitLead, skipCapture };
}
