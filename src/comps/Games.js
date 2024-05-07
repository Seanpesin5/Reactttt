class Games {
  static async fetchGamesByYear(year) {
      const url = new URL('http://fs1.co.il/bus/xbox1.php');
      if (year) {
          url.searchParams.append('year', year);
      }

      try {
          const response = await fetch(url.toString());
          if (!response.ok) {
              throw new Error(`HTTP status ${response.status}`);
          }
          return await response.json();
      } catch (error) {
          console.error("Failed to fetch games:", error);
          throw error;
      }
  }
}
export default Games;