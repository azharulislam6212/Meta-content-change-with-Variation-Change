      updateVariantDescription(variantId) {
        console.log("Tress", variantId);
        try {
          const jsonEl = document.getElementById('variant-json');
          if (!jsonEl) return;

          const variantData = JSON.parse(jsonEl.textContent);
          const descriptionBox = document.getElementById('variant-description');

            console.log("variantData", variantData);
            console.log("description", variantData[variantId].description);


          if (variantData[variantId] && variantData[variantId].description) {
            descriptionBox.innerHTML = variantData[variantId].description;
          } else {
            descriptionBox.innerHTML = '';
          }
        } catch (e) {
          console.error('Error updating variant description:', e);
        }
      }
