window.BENCHMARK_DATA = {
  "lastUpdate": 1689756070335,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Yi",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3057b13bde32b53348fce9975f6d496c22c86c20",
          "message": "Merge pull request #3316 from OnedgeLee/release/2.6.0\n\n🚀 Release 3.0.0",
          "timestamp": "2023-07-19T16:32:06+09:00",
          "tree_id": "3b62a9dc282845b24f541286df67c4900303950b",
          "url": "https://github.com/planetarium/libplanet/commit/3057b13bde32b53348fce9975f6d496c22c86c20"
        },
        "date": 1689753170812,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8312089.6875,
            "unit": "ns",
            "range": "± 255806.7850443727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20284215.7,
            "unit": "ns",
            "range": "± 807806.601301358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49656290.68181818,
            "unit": "ns",
            "range": "± 925989.3717276717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100719467.96666667,
            "unit": "ns",
            "range": "± 1807164.760064144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204066701.14285713,
            "unit": "ns",
            "range": "± 2843098.1175776394"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54893.02173913043,
            "unit": "ns",
            "range": "± 5570.319204810283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311754.4683544304,
            "unit": "ns",
            "range": "± 16116.391773304977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293646.06315789477,
            "unit": "ns",
            "range": "± 16766.155255746573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299290.5689655172,
            "unit": "ns",
            "range": "± 15904.314555602845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4190409.616438356,
            "unit": "ns",
            "range": "± 206986.10449574402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3605286.653846154,
            "unit": "ns",
            "range": "± 98654.36017082764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16257.634146341463,
            "unit": "ns",
            "range": "± 1338.2382076077167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80313.05319148937,
            "unit": "ns",
            "range": "± 6634.382690598446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81592.02222222222,
            "unit": "ns",
            "range": "± 9159.78351515168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90504.60869565218,
            "unit": "ns",
            "range": "± 10473.45243618886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5011.894736842105,
            "unit": "ns",
            "range": "± 746.7960568347421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16097.93023255814,
            "unit": "ns",
            "range": "± 1380.4577569069802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1552362.59375,
            "unit": "ns",
            "range": "± 203916.05956391795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2670102.850877193,
            "unit": "ns",
            "range": "± 113363.60078675594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2002632.2083333333,
            "unit": "ns",
            "range": "± 182027.51646535643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5724017.956043956,
            "unit": "ns",
            "range": "± 320935.81977200886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3342923.641025641,
            "unit": "ns",
            "range": "± 116455.13455731563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3519749.255319149,
            "unit": "ns",
            "range": "± 226034.4105222204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4386803.127272727,
            "unit": "ns",
            "range": "± 185341.02291562283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3894587.9791666665,
            "unit": "ns",
            "range": "± 258976.51073643847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7387806.584905661,
            "unit": "ns",
            "range": "± 280864.5287597559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6308546.804166666,
            "unit": "ns",
            "range": "± 49767.63482983064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1923912.140625,
            "unit": "ns",
            "range": "± 15162.78022096051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1267376.2037760417,
            "unit": "ns",
            "range": "± 10944.486918649853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2857621.153846154,
            "unit": "ns",
            "range": "± 29287.069296124613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854009.775390625,
            "unit": "ns",
            "range": "± 3316.4064274454418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794707.15859375,
            "unit": "ns",
            "range": "± 4080.801081983647"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Yi",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2944cbdfc0856cfea856725e91ccfa35e9d22e97",
          "message": "Merge pull request #3317 from OnedgeLee/release/3.0.0\n\nRelease 3.0.0",
          "timestamp": "2023-07-19T16:48:08+09:00",
          "tree_id": "4806b239338e622d86b96616645a9fd8f178931b",
          "url": "https://github.com/planetarium/libplanet/commit/2944cbdfc0856cfea856725e91ccfa35e9d22e97"
        },
        "date": 1689754102071,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9024992.802083334,
            "unit": "ns",
            "range": "± 533509.1153254848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22319681.322580647,
            "unit": "ns",
            "range": "± 1016383.8324679382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55609087.35714286,
            "unit": "ns",
            "range": "± 720382.6829540626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109261705.73076923,
            "unit": "ns",
            "range": "± 1683398.2228257894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220206561.07142857,
            "unit": "ns",
            "range": "± 6260196.331296546"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64821.967391304344,
            "unit": "ns",
            "range": "± 12084.354472660218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318444.65476190473,
            "unit": "ns",
            "range": "± 16573.788634426703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293318.17142857146,
            "unit": "ns",
            "range": "± 14179.926027455127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291271.9032258064,
            "unit": "ns",
            "range": "± 13131.35381594988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4135909.4,
            "unit": "ns",
            "range": "± 75842.9476463416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3693918.4545454546,
            "unit": "ns",
            "range": "± 90130.64073820174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17800.625,
            "unit": "ns",
            "range": "± 2383.9499829175593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93151.83,
            "unit": "ns",
            "range": "± 12627.42019691251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110215.1105263158,
            "unit": "ns",
            "range": "± 11447.901477577167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109994.28125,
            "unit": "ns",
            "range": "± 17261.90834068386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6296.972527472528,
            "unit": "ns",
            "range": "± 966.1831933571207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20471.61111111111,
            "unit": "ns",
            "range": "± 3980.5929000376577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1597169.6717171718,
            "unit": "ns",
            "range": "± 148013.0314513874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3066904.010989011,
            "unit": "ns",
            "range": "± 197086.6517698635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2142855.785714286,
            "unit": "ns",
            "range": "± 191347.71507805568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6089011.895061729,
            "unit": "ns",
            "range": "± 317833.9787799866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3691014.9242424243,
            "unit": "ns",
            "range": "± 321783.8413590679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3691850.0918367347,
            "unit": "ns",
            "range": "± 275484.91759374173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4512456.302631579,
            "unit": "ns",
            "range": "± 226900.99289801973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4170764.963917526,
            "unit": "ns",
            "range": "± 349644.00735855795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7271966,
            "unit": "ns",
            "range": "± 302699.39608602814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7008639.617919922,
            "unit": "ns",
            "range": "± 217136.91510776393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2167287.8151367186,
            "unit": "ns",
            "range": "± 76099.84660557105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387046.016731771,
            "unit": "ns",
            "range": "± 25199.83319369051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2956797.9833333334,
            "unit": "ns",
            "range": "± 55031.34291399229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 943624.1962890625,
            "unit": "ns",
            "range": "± 12136.622906790215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805496.2158854167,
            "unit": "ns",
            "range": "± 23428.168378572962"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Yi",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55e702f061b2cec4b9aea6c7cb7fb89f796af97e",
          "message": "Merge pull request #3319 from OnedgeLee/prepare/3.0.1\n\n🔧 Prepare 3.0.1",
          "timestamp": "2023-07-19T17:22:11+09:00",
          "tree_id": "58becc2634fa58da975dbbfce9e5efc137e1e102",
          "url": "https://github.com/planetarium/libplanet/commit/55e702f061b2cec4b9aea6c7cb7fb89f796af97e"
        },
        "date": 1689755996469,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8421061.8,
            "unit": "ns",
            "range": "± 153445.30695388318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21729226.7,
            "unit": "ns",
            "range": "± 321345.96927081567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55041576.70689655,
            "unit": "ns",
            "range": "± 1502819.4308138993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111612162.5,
            "unit": "ns",
            "range": "± 4455476.881529471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224804779.40625,
            "unit": "ns",
            "range": "± 6985434.961206998"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74227.77586206897,
            "unit": "ns",
            "range": "± 5377.640008642278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373510.1923076923,
            "unit": "ns",
            "range": "± 41085.7948749233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342268.3804347826,
            "unit": "ns",
            "range": "± 30505.567948927717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328157.97191011236,
            "unit": "ns",
            "range": "± 22853.814115775218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4341195.62962963,
            "unit": "ns",
            "range": "± 121677.35191769955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4062468.552631579,
            "unit": "ns",
            "range": "± 88535.0880263323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19152.354166666668,
            "unit": "ns",
            "range": "± 2920.719085860325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99131.73958333333,
            "unit": "ns",
            "range": "± 16063.950130810092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99606.5,
            "unit": "ns",
            "range": "± 13836.566694622508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110815.83333333333,
            "unit": "ns",
            "range": "± 13950.045140592247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5734.252688172043,
            "unit": "ns",
            "range": "± 893.6634136338442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17550.458333333332,
            "unit": "ns",
            "range": "± 2355.534736101859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640790.4086021506,
            "unit": "ns",
            "range": "± 166393.33893709682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3057195.108108108,
            "unit": "ns",
            "range": "± 147711.5335628009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2226830.7150537632,
            "unit": "ns",
            "range": "± 176982.39629488395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5914342.476744186,
            "unit": "ns",
            "range": "± 216119.2559171119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3592727.147727273,
            "unit": "ns",
            "range": "± 302594.88202823105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3789195.85483871,
            "unit": "ns",
            "range": "± 253160.05144755176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5003109.26744186,
            "unit": "ns",
            "range": "± 626800.2467941897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4230963.098901099,
            "unit": "ns",
            "range": "± 424427.42909673956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7868582.287234043,
            "unit": "ns",
            "range": "± 608187.0578037228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6735625.024553572,
            "unit": "ns",
            "range": "± 109632.7023262354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2054291.4662388393,
            "unit": "ns",
            "range": "± 26431.373095886178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1281893.3357872595,
            "unit": "ns",
            "range": "± 12357.845986756909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2690106.071875,
            "unit": "ns",
            "range": "± 42733.88064757354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 782758.7741887019,
            "unit": "ns",
            "range": "± 6778.766898196571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725482.8738839285,
            "unit": "ns",
            "range": "± 9282.912092973635"
          }
        ]
      }
    ]
  }
}