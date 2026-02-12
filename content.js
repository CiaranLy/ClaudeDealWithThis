// Auto-send the message when the page loads with ?q= parameter
(function () {
  const url = new URL(window.location.href);
  if (!url.searchParams.has("q")) return;

  // Wait for the send button to become available and clickable
  const observer = new MutationObserver(() => {
    // Try multiple selectors since Claude.ai's UI may vary
    const sendButton =
      document.querySelector('button[aria-label="Send Message"]') ||
      document.querySelector('button[aria-label="Send message"]') ||
      document.querySelector('fieldset button[type="button"]:last-child');
    if (sendButton && !sendButton.disabled) {
      observer.disconnect();
      sendButton.click();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Timeout after 10 seconds to avoid observing forever
  setTimeout(() => observer.disconnect(), 10000);
})();
