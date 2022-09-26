import clsx from 'clsx';
import {
  flattenConnection,
  Image,
  useCart,
  useCartLine,
  Link,
  Money,
  useMoney,
} from '@shopify/hydrogen';
import {Heading, IconRemove,} from '~/components';
import Masonry from "react-masonry-component";
import {Text} from '~/components';
import {isDiscounted, isNewArrival} from '~/lib/utils';
import {getProductPlaceholder} from '~/lib/placeholders';

export function ProductCard({product, label, className, loading, onClick}) {
  let cardLabel;
  const cardData = product?.variants ? product : getProductPlaceholder();
  const {
    image,
    priceV2: price,
    compareAtPriceV2: compareAtPrice,
    descriptionHtml: description,
  } = flattenConnection(cardData?.variants)[0] || {};

  if (label) {
    cardLabel = label;
  } else if (isDiscounted(price, compareAtPrice)) {
    cardLabel = 'Sale';
  } else if (isNewArrival(product.publishedAt)) {
    cardLabel = 'New';
  }

  const styles = clsx('grid gap-6', className);
  const masonryOptions = {
    fitWidth: false,
    columnWidth: 300,
    gutter: 30,
    itemSelector: ".photo-item",
  };

  return (
    <div class="flip-card">
    <Link onClick={onClick} to={`/products/${product.handle}`}>
      
   
  <div >
    <div >    
         <Image
             className={`photo-item`}
              data={image}
              alt={image.altText || `Picture of ${product.title}`}
              loading={loading}
            />
   </div>
    
{/* <div class="flip-card-back">
   <div className="grid gap-1">   
         <Image   
              className=" fadeOut" 
              data={image}
              alt={image.altText || `Picture of ${product.title}`}
              loading={loading}
            />    
     </div>
      
      <div>
          <Text  as="h3" >
            {product.title}
          </Text>
          </div>
          <div className="flex gap-4">
            <Text className="flex gap-4">
            Price:<Money withoutTrailingZeros data={price} />
               {isDiscounted(price, compareAtPrice) && (
                <CompareAtPrice
                 
                  className={'opacity-80'}
                  data={compareAtPrice}
                />
              )}
               
            </Text>  
                    
          </div>
        </div> */}
        
    </div>  
      
 
 
     </Link>
     <div className="grid gap-1">

{/* <Text >
  {product.title}
</Text>
<div className="flex gap-4">
  <Text className="flex gap-4">
    <Money withoutTrailingZeros data={price} />
    {isDiscounted(price, compareAtPrice) && (
      <CompareAtPrice
        className={'opacity-50'}
        
      />
    )}
  </Text>
</div> */}
</div>
     </div>  
    
  );
}



// function CompareAtPrice({data, className}) {
//   const {currencyNarrowSymbol, withoutTrailingZerosAndCurrency} =
//     useMoney(data);

//   const styles = clsx('strike', className);

//   return (
//     <span className={styles}>
//       {currencyNarrowSymbol}
//       {withoutTrailingZerosAndCurrency}
//     </span>
//   );
// }

