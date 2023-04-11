import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateProductInput } from "../dtos/inputs/create-product-input";
import { Product } from "../dtos/models/product-model";
import { Franchising } from "../dtos/models/franchising-model";

@Resolver(() => Product)
export class ProductsResolver {
  @Query(() => [Product])
  async products() {
    return [
        {
            createdAt: new Date(),
            updatedAt: new Date(),
            name: "Produto 1",
            priority: "0"
        },
        {
            createdAt: new Date(),
            updatedAt: new Date(),
            name: "Produto 2",
            priority: "3"
        }
    ] as Product[]
  }

  @Mutation(() => Product)
  async createProduct(@Arg('data') data: CreateProductInput) {
    const product = {
      franchisingId: data.franchisingId,
      name: data.name,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      priority: data.priority,
    };

    return product;
  }

  @FieldResolver(() => Franchising)
  async franchising(@Root() franchising: Franchising) {
    console.log("🚀 ~ file: products-resolver.ts:28 ~ ProductsResolver ~ franchising ~ franchising:", franchising)
    
    return {
        id: "1234"
    }
  }
}
